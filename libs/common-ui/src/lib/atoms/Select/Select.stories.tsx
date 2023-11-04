import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'UI/Atoms/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'select',
    options: ['Hello', 'World'],
    value: 'Hello',
  },
};

export const SelectWithLabel: Story = {
  args: {
    id: 'select',
    options: ['Hello', 'World'],
    value: 'Hello',
    label: 'Select an option',
  },
};
