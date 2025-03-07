import type { Meta, StoryObj } from "@storybook/react";

import ValueDescriptor, {
  ValueDescriptorProps,
} from "../components/ValueDescriptor/ValueDescriptor";

const meta = {
  title: "Example/ValueDescriptor",
  component: ValueDescriptor,
  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<ValueDescriptorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 560322.02,
    description: "Ganhos da semana",    
    color: 'default'
  },
};


export const DefaultCurrency: Story = {
  args: {
    description: "Ganhos na semana",
    value: 560322.02,
    isCurrency: true,
    color: 'default'
  },
};

export const Primary: Story = {
  args: {
    description: "Ganhos na semana",
    value: 560322.02,
    color: 'primary'
  },
};

export const PrimaryCurrency: Story = {
  args: {
    description: "Ganhos na semana",
    value: 560322.02,
    isCurrency: true,
    color: 'primary'
  },
};