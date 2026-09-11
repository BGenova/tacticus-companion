import type { Meta, StoryObj } from '@storybook/react';
import { RosterScreen } from './RosterScreen';

const meta = {
  title: 'Screens/RosterScreen',
  component: RosterScreen,
  tags: ['autodocs'],
  args: { onSelectCharacter: () => {} },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof RosterScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
