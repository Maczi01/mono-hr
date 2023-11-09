import { Header } from './Header';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Atoms/Input',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Home',
  },
};
