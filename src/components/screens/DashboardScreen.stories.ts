import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { DashboardScreen } from './DashboardScreen';
import { ACTIONS, CAMPAIGNS } from '../../data/mock';
import { usePlayerStore } from '../../stores/player-store';

const meta = {
  title: 'Screens/DashboardScreen',
  component: DashboardScreen,
  tags: ['autodocs'],
  args: { campaigns: CAMPAIGNS, actions: ACTIONS },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof DashboardScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Aucun objectif actif — créez-en un depuis l\'écran Goals.')).toBeInTheDocument();
  },
};

export const WithNextGoal: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().importFromJson(JSON.stringify({
      schemaVersion: 1,
      profile: { username: 'TestUser' },
      characters: {
        bellator: {
          characterId: 'bellator', rank: 3, rarity: 2, stars: 3, level: 25, xp: 1200,
          shards: 45, mythicShards: 0, abilities: { active: 3, passive: 2 }, upgrades: [], equipment: [],
        },
      },
      inventory: { items: {} },
      campaigns: {},
      goals: [{ id: 'goal-1', characterId: 'bellator', type: 'rank', target: 5, priority: 1, status: 'active' }],
      updatedAt: '2026-09-10T18:30:00.000Z',
    }));
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Bellator')).toBeInTheDocument();
    await expect(canvas.getByText('Rang → 5', { exact: false })).toBeInTheDocument();
  },
};
