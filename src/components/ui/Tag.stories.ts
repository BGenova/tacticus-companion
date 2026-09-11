import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
  title: 'UI/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: { children: 'Label', variant: 'tag-accent' },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {};

export const Accent2: Story = { args: { variant: 'tag-accent-2', children: 'Epic' } };

export const Outline: Story = { args: { variant: 'tag-outline', children: 'Imperial' } };

export const Neutral: Story = { args: { variant: 'tag-neutral', children: '3 essais' } };
