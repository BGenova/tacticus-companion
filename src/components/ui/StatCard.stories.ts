import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';

const meta = {
  title: 'UI/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  args: { label: 'Attaque', value: '1 840' },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Health: Story = { args: { label: 'Vie', value: '22 500' } };
