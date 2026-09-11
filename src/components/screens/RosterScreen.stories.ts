import type { Meta, StoryObj } from '@storybook/react';
import { RosterScreen } from './RosterScreen';
import { ROSTER } from '../../data/mock';

const meta = {
  title: 'Screens/RosterScreen',
  component: RosterScreen,
  tags: ['autodocs'],
  args: { roster: ROSTER, onSelectCharacter: () => {} },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof RosterScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = { args: { roster: [] } };
