import type { Meta, StoryObj } from '@storybook/react-vite';
import { CharacterAvatar } from './CharacterAvatar';

const meta = {
  title: 'UI/CharacterAvatar',
  component: CharacterAvatar,
  tags: ['autodocs'],
  args: { characterId: 'ultraTigurius', initials: 'VT' },
} satisfies Meta<typeof CharacterAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPortrait: Story = {};

export const FallbackToInitials: Story = {
  args: { characterId: 'unknown-character', initials: 'XY' },
};

export const Large: Story = {
  args: { size: 88 },
};
