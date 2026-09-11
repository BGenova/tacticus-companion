import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { FarmPlannerScreen } from './FarmPlannerScreen';
import { usePlayerStore } from '../../stores/player-store';

const meta = {
  title: 'Screens/FarmPlannerScreen',
  component: FarmPlannerScreen,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof FarmPlannerScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Aucun objectif de rang actif')).toBeInTheDocument();
  },
};

// ultraEliminatorSgt (Certus) at rank 0 -> Stone II needs upgHpC003 (Lesser
// Reliquary of Protection, Common), farmable at Indomitus node 33 — verified
// against the vendored rank-up-upgrades.ts / upgrade-materials.ts / farm-nodes.ts.
export const WithShoppingList: Story = {
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
      campaigns: {},
      goals: [{ id: 'goal-1', characterId: 'ultraEliminatorSgt', type: 'rank', target: 1, priority: 1, status: 'active' }],
      updatedAt: '2026-09-12T00:00:00.000Z',
    }));
    const canvas = within(canvasElement);
    // The material name appears both in the shopping-list table and as a tag
    // on its recommended node, so there are multiple matches by design.
    await expect((await canvas.findAllByText('Lesser Reliquary of Protection')).length).toBeGreaterThan(0);
    await expect(canvas.getByText('Nœud 33')).toBeInTheDocument();
  },
};
