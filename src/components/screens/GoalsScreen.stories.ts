import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { GoalsScreen } from './GoalsScreen';
import { usePlayerStore } from '../../stores/player-store';

const SAMPLE_PLAYER_DATA = JSON.stringify({
  schemaVersion: 1,
  profile: { username: 'TestUser' },
  characters: {
    bellator: {
      characterId: 'bellator',
      rank: 3,
      rarity: 2,
      stars: 3,
      level: 25,
      xp: 1200,
      shards: 45,
      mythicShards: 0,
      abilities: { active: 3, passive: 2 },
      upgrades: [],
      equipment: [],
    },
  },
  inventory: { items: {} },
  campaigns: {},
  goals: [
    { id: 'goal-1', characterId: 'bellator', type: 'rank', target: 5, priority: 1, status: 'active' },
  ],
  updatedAt: '2026-09-10T18:30:00.000Z',
});

const meta = {
  title: 'Screens/GoalsScreen',
  component: GoalsScreen,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof GoalsScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Aucun objectif')).toBeInTheDocument();
  },
};

export const WithGoal: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().importFromJson(SAMPLE_PLAYER_DATA);
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Rang → 5', { exact: false })).toBeInTheDocument();
  },
};

export const AddGoal: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().importFromJson(SAMPLE_PLAYER_DATA);
    const canvas = within(canvasElement);

    await userEvent.selectOptions(canvas.getByLabelText('Personnage'), 'bellator');
    await userEvent.selectOptions(canvas.getByLabelText("Type d'objectif"), 'rarity');
    await userEvent.type(canvas.getByPlaceholderText('Cible'), '4');
    await userEvent.click(canvas.getByRole('button', { name: 'Ajouter' }));

    await expect(await canvas.findByText('Rareté → 4', { exact: false })).toBeInTheDocument();
  },
};
