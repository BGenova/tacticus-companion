import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { CharacterDetailScreen } from './CharacterDetailScreen';
import { usePlayerStore } from '../../stores/player-store';

const SAMPLE_PLAYER_DATA = JSON.stringify({
  schemaVersion: 1,
  profile: { username: 'TestUser' },
  characters: {
    bellator: {
      characterId: 'bellator',
      rank: 3,
      rarity: 4,
      stars: 3,
      level: 25,
      xp: 1200,
      shards: 45,
      mythicShards: 2,
      abilities: { active: 3, passive: 2 },
      upgrades: ['upgrade-1'],
      equipment: [{ slot: 'weapon', name: 'Bolt Pistol', rarity: 'common', level: 5 }],
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
  title: 'Screens/CharacterDetailScreen',
  component: CharacterDetailScreen,
  tags: ['autodocs'],
  args: { characterId: 'bellator', onBack: () => {}, onGoToFarm: () => {} },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof CharacterDetailScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Personnage introuvable')).toBeInTheDocument();
  },
};

export const WithData: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().importFromJson(SAMPLE_PLAYER_DATA);
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Bellator')).toBeInTheDocument();
    await expect(canvas.getByText('Legendary')).toBeInTheDocument();
    await expect(canvas.getByText('Rang → 5', { exact: false })).toBeInTheDocument();
  },
};
