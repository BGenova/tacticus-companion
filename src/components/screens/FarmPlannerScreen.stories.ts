import type { Meta, StoryObj } from '@storybook/react';
import { FarmPlannerScreen } from './FarmPlannerScreen';
import { FARM_COMPONENTS, FARM_NODES } from '../../data/mock';

const meta = {
  title: 'Screens/FarmPlannerScreen',
  component: FarmPlannerScreen,
  tags: ['autodocs'],
  args: { components: FARM_COMPONENTS, nodes: FARM_NODES },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof FarmPlannerScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
