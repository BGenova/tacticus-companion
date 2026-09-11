import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: { activeScreen: 'dashboard', onNavigate: () => {} },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {};

export const Roster: Story = { args: { activeScreen: 'roster' } };

export const Goals: Story = { args: { activeScreen: 'goals' } };

export const Farm: Story = { args: { activeScreen: 'farm' } };

export const Settings: Story = { args: { activeScreen: 'settings' } };
