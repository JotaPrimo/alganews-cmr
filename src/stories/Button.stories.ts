import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button, { ButtonProps } from '../components/Button/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>; // Aqui garantimos que ButtonProps está tipado

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    label: 'Button',
  },
};
