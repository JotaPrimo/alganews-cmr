import type { Meta, StoryObj } from "@storybook/react";

import Info, {
    InfoProps,
} from "../components/Info/Info";

const meta = {
  title: "Example/Info",
  component: Info,
  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<InfoProps>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    title: 'Post não encontrado',
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
  },
};