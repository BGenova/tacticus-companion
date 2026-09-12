import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { LegendaryEventsScreen } from './LegendaryEventsScreen';
import { usePlayerStore } from '../../stores/player-store';

const meta = {
  title: 'Screens/LegendaryEventsScreen',
  component: LegendaryEventsScreen,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof LegendaryEventsScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Aucun Legendary Event')).toBeInTheDocument();
  },
};

// Trimmed from a real account's astarLysander event (2026-09-12): 3 lanes
// (Alpha/Beta/Gamma), lane Alpha had encounterPoints 32+28+33+37+44+48+0=222
// across its 7 battle entries, 5 objectives cleared.
export const WithProgress: Story = {
  play: async ({ canvasElement }) => {
    usePlayerStore.getState().reset();
    usePlayerStore.getState().importFromJson(JSON.stringify({
      schemaVersion: 1,
      profile: { username: 'Doudou' },
      characters: {},
      inventory: { items: {} },
      campaigns: {},
      goals: [],
      legendaryEvents: [
        {
          characterId: 'astarLysander',
          currentPoints: 2013,
          currentCurrency: 40,
          currentShards: 100,
          currentClaimedChestIndex: 4,
          lanes: [
            { laneId: 1, laneName: 'Alpha', encounterPoints: 222, objectivesClearedCount: 5, battlesTracked: 7 },
            { laneId: 2, laneName: 'Beta', encounterPoints: 202, objectivesClearedCount: 4, battlesTracked: 7 },
            { laneId: 3, laneName: 'Gamma', encounterPoints: 249, objectivesClearedCount: 5, battlesTracked: 11 },
          ],
        },
      ],
      updatedAt: '2026-09-12T00:00:00.000Z',
    }));
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('2013 points')).toBeInTheDocument();
    await expect(canvas.getByText('Voie Alpha')).toBeInTheDocument();
    await expect(canvas.getByText('222 pts')).toBeInTheDocument();
    await expect(canvas.getByText('5 objectif(s) · 7 combat(s)')).toBeInTheDocument();
  },
};
