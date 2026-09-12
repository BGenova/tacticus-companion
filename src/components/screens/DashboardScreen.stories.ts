import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { DashboardScreen } from './DashboardScreen';
import { usePlayerStore } from '../../stores/player-store';

const meta = {
  title: 'Screens/DashboardScreen',
  component: DashboardScreen,
  tags: ['autodocs'],
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
    await expect(canvas.getByText('Rien ne bloque vos objectifs de rang actifs.')).toBeInTheDocument();
    await expect(canvas.getByText("Rien à farmer aujourd'hui pour vos objectifs actifs.")).toBeInTheDocument();
    await expect(canvas.getByText('Aucune action recommandée pour le moment.')).toBeInTheDocument();
  },
};

// ultraEliminatorSgt rank goal (Stone I -> Stone II) needs 6 upgrades none of
// which are owned; verified against the vendored dataset (same fixture as
// FarmPlannerScreen/CampaignsScreen stories).
export const WithRealFarmingData: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().importFromJson(JSON.stringify({
      schemaVersion: 1,
      profile: { username: 'TestUser' },
      characters: {
        ultraEliminatorSgt: {
          characterId: 'ultraEliminatorSgt', rank: 0, rarity: 1, stars: 1, level: 5, xp: 100,
          shards: 0, mythicShards: 0, abilities: { active: 1, passive: 1 }, upgrades: [], equipment: [],
        },
      },
      inventory: { items: {} },
      campaigns: {
        indomitus: { campaignId: 'indomitus', name: 'Indomitus', type: 'Standard', completedBattle: 8, totalBattles: 75 },
      },
      goals: [{ id: 'goal-1', characterId: 'ultraEliminatorSgt', type: 'rank', target: 1, priority: 1, status: 'active' }],
      updatedAt: '2026-09-12T00:00:00.000Z',
    }));
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Lesser Reliquary of Protection')).toBeInTheDocument();
    await expect(canvas.getByText('Nœud 33', { exact: false })).toBeInTheDocument();
    await expect(canvas.getByText('Palier 32', { exact: false })).toBeInTheDocument();
  },
};

export const WithNextGoal: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().importFromJson(JSON.stringify({
      schemaVersion: 1,
      profile: { username: 'TestUser', level: 47, powerRating: 125000 },
      characters: {
        ultraInceptorSgt: {
          characterId: 'ultraInceptorSgt', rank: 3, rarity: 2, stars: 3, level: 25, xp: 1200,
          shards: 45, mythicShards: 0, abilities: { active: 3, passive: 2 }, upgrades: [], equipment: [],
        },
      },
      inventory: { items: {} },
      campaigns: {
        indomitus: { campaignId: 'indomitus', completedBattle: 30, totalBattles: 75, name: 'Indomitus', type: 'Standard' },
      },
      goals: [{ id: 'goal-1', characterId: 'ultraInceptorSgt', type: 'rank', target: 5, priority: 1, status: 'active' }],
      updatedAt: '2026-09-10T18:30:00.000Z',
    }));
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Bellator')).toBeInTheDocument();
    await expect(canvas.getByText('Rang → 5', { exact: false })).toBeInTheDocument();
    await expect(canvas.getByText('TestUser')).toBeInTheDocument();
    await expect(canvas.getByText('Niveau 47 · Puissance 125 000', { exact: false })).toBeInTheDocument();
    // "Indomitus" can now legitimately appear twice: once in the Campagnes
    // progress card, and once more in Actions recommandées if the real
    // rank-up data (Bellator now uses its real id) surfaces a campaign
    // opportunity for the same campaign.
    await expect((await canvas.findAllByText('Indomitus')).length).toBeGreaterThan(0);
    await expect(canvas.getByText('40% complétée', { exact: false })).toBeInTheDocument();
  },
};
