import type { Meta, StoryObj } from '@storybook/react';
import { CharacterDetailScreen } from './CharacterDetailScreen';
import { ROSTER } from '../../data/mock';

const meta = {
  title: 'Screens/CharacterDetailScreen',
  component: CharacterDetailScreen,
  tags: ['autodocs'],
  args: { character: ROSTER[0], onBack: () => {}, onGoToFarm: () => {} },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof CharacterDetailScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Legendary: Story = {};

export const Common: Story = { args: { character: ROSTER[7] } };
