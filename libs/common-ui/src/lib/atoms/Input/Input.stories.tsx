import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'UI/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // label: 'Hello',
  },
};

export const Primary: Story = {
  args: {
    // label: 'Hello',
  },
};

export const Secondary: Story = {
  args: {
    // label: 'Hello',
  },
};
