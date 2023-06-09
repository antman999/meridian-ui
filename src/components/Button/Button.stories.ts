import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Meridian-UI/Navigation/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    textColor: { control: 'color' },
    borderColor: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Disabled: Story={
  args: {
    label: 'Disabled Button', 
    disabled: true
  }
}
