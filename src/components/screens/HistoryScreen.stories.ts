import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { HistoryScreen } from './HistoryScreen';
import { usePlayerStore } from '../../stores/player-store';
import { getAllSnapshots, deleteSnapshot, getCompletedGoals, deleteCompletedGoal } from '../../adapters/history-db';

async function clearHistoryDb() {
  for (const s of await getAllSnapshots()) await deleteSnapshot(s.id);
  for (const g of await getCompletedGoals()) await deleteCompletedGoal(g.goalId);
}

const SAMPLE_DATA = {
  schemaVersion: 1,
  profile: { username: 'TestUser' },
  characters: {
    ultraInceptorSgt: {
      characterId: 'ultraInceptorSgt', rank: 3, rarity: 2, stars: 3, level: 25, xp: 1200,
      shards: 45, mythicShards: 0, abilities: { active: 3, passive: 2 }, upgrades: [], equipment: [],
    },
  },
  inventory: { items: {} },
  campaigns: {},
  goals: [],
  updatedAt: '2026-09-12T00:00:00.000Z',
};

const meta = {
  title: 'Screens/HistoryScreen',
  component: HistoryScreen,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof HistoryScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    await clearHistoryDb();
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Aucun snapshot')).toBeInTheDocument();
  },
};

export const WithSnapshotAndDiff: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    await clearHistoryDb();

    usePlayerStore.getState().importFromJson(JSON.stringify(SAMPLE_DATA));
    // Rank up ultraInceptorSgt and re-import: this creates a snapshot of the
    // rank-3 state before overwriting it with the rank-5 state.
    usePlayerStore.getState().importFromJson(JSON.stringify({
      ...SAMPLE_DATA,
      characters: { ultraInceptorSgt: { ...SAMPLE_DATA.characters.ultraInceptorSgt, rank: 5 } },
    }));
    usePlayerStore.getState().addGoal({ characterId: 'ultraInceptorSgt', type: 'rank', target: 5 });
    const goal = usePlayerStore.getState().getGoals()[0];
    usePlayerStore.getState().updateGoalStatus(goal.id, 'done');

    // Fire-and-forget history writes need a tick to settle before the
    // component's effect (triggered by the store updates above) re-reads them.
    await new Promise((r) => setTimeout(r, 50));

    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Rang 3 → 5', { exact: false })).toBeInTheDocument();
    await expect(canvas.getByText('Bellator — Rang → 5', { exact: false })).toBeInTheDocument();
  },
};
