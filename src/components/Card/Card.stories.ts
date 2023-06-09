import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
const meta = {
  title: 'Meridian-UI/Data Display/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    textColor: { control: 'color' },
    borderColor: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};