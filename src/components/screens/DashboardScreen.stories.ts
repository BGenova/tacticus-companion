import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { DashboardScreen } from './DashboardScreen';
import { ACTIONS } from '../../data/mock';
import { usePlayerStore } from '../../stores/player-store';

const meta = {
  title: 'Screens/DashboardScreen',
  component: DashboardScreen,
  tags: ['autodocs'],
  args: { actions: ACTIONS },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof DashboardScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Aucun objectif actif — créez-en un depuis l\'écran Goals.')).toBeInTheDocument();
    await expect(canvas.getByText('Importez vos données depuis Settings pour voir votre profil.')).toBeInTheDocument();
    await expect(canvas.getByText('Aucune campagne importée.')).toBeInTheDocument();
  },
};

export const WithNextGoal: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().importFromJson(JSON.stringify({
      schemaVersion: 1,
      profile: { username: 'TestUser', level: 47, powerRating: 125000 },
      characters: {
        bellator: {
          characterId: 'bellator', rank: 3, rarity: 2, stars: 3, level: 25, xp: 1200,
          shards: 45, mythicShards: 0, abilities: { active: 3, passive: 2 }, upgrades: [], equipment: [],
        },
      },
      inventory: { items: {} },
      campaigns: {
        indomitus: { campaignId: 'indomitus', completedBattle: 30, totalBattles: 75, name: 'Indomitus', type: 'Standard' },
      },
      goals: [{ id: 'goal-1', characterId: 'bellator', type: 'rank', target: 5, priority: 1, status: 'active' }],
      updatedAt: '2026-09-10T18:30:00.000Z',
    }));
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Bellator')).toBeInTheDocument();
    await expect(canvas.getByText('Rang → 5', { exact: false })).toBeInTheDocument();
    await expect(canvas.getByText('TestUser')).toBeInTheDocument();
    await expect(canvas.getByText('Niveau 47 · Puissance 125 000', { exact: false })).toBeInTheDocument();
    await expect(canvas.getByText('Indomitus')).toBeInTheDocument();
    await expect(canvas.getByText('40% complétée', { exact: false })).toBeInTheDocument();
  },
};
