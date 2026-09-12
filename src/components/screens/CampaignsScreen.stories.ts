import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { CampaignsScreen } from './CampaignsScreen';
import { usePlayerStore } from '../../stores/player-store';

const meta = {
  title: 'Screens/CampaignsScreen',
  component: CampaignsScreen,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof CampaignsScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Aucune campagne importée')).toBeInTheDocument();
  },
};

// ultraEliminatorSgt rank goal (Stone I -> Stone II) needs 6 upgrades; the
// nearest unreached Indomitus node dropping one of them (past node 8) is
// node 32 (upgArmC002 / "Fine Purity Seal") — verified against the vendored
// dataset. The Standard/Elite variants should show side by side.
export const WithOpportunity: Story = {
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
        indomitusElite: { campaignId: 'indomitusElite', name: 'Indomitus', type: 'Elite', completedBattle: 2, totalBattles: 50 },
      },
      goals: [{ id: 'goal-1', characterId: 'ultraEliminatorSgt', type: 'rank', target: 1, priority: 1, status: 'active' }],
      updatedAt: '2026-09-12T00:00:00.000Z',
    }));
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Indomitus')).toBeInTheDocument();
    await expect(canvas.getByText('Normale')).toBeInTheDocument();
    await expect(canvas.getByText('Élite')).toBeInTheDocument();
    await expect(canvas.getByText('Rentable à pousser → palier 32', { exact: false })).toBeInTheDocument();
    await expect(canvas.getByText('Fine Purity Seal')).toBeInTheDocument();
  },
};
