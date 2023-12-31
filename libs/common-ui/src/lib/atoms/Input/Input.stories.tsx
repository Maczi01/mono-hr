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
    id: 'input',
  },
};

export const InputWithLabel: Story = {
  args: {
    label: 'Input label',
    id: 'input',
  },
};

export const InputWithHelperText: Story = {
  args: {
    label: 'Input label',
    id: 'input',
    helperText: 'This is helper text',
  },
};
