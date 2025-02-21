import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Input, { InputProps } from "../components/Input/Input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPlaceholder: Story = {
  args: {
    placeholder: "e.g: Jon Doe",
  },
};

export const WithlabelAndPlaceholder: Story = {
  args: {
    label: "Name",
    placeholder: "e.g: Jon Doe",
  },
};

export const WithLabelAndContent: Story = {
  args: {
    label: "Name",
    placeholder: "e.g: Jon Doe",
    value: "Jon Doe",
  },
};

export const WithContent: Story = {
  args: {
    value: "Jon Doe",
  },
};
