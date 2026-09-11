import type { Meta, StoryObj } from '@storybook/react';
import { GoalsScreen } from './GoalsScreen';
import { GOALS } from '../../data/mock';

const meta = {
  title: 'Screens/GoalsScreen',
  component: GoalsScreen,
  tags: ['autodocs'],
  args: { goals: GOALS },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof GoalsScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
