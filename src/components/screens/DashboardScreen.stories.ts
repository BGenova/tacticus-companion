import type { Meta, StoryObj } from '@storybook/react';
import { DashboardScreen } from './DashboardScreen';
import { ACTIONS, CAMPAIGNS } from '../../data/mock';

const meta = {
  title: 'Screens/DashboardScreen',
  component: DashboardScreen,
  tags: ['autodocs'],
  args: { campaigns: CAMPAIGNS, actions: ACTIONS },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof DashboardScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
