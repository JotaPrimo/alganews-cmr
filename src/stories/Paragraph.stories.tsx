import type { Meta, StoryObj } from "@storybook/react";

import Paragraph, {
  ParagraphProps,
} from "../components/Typography/Paragraph";

const meta = {
  title: "Example/Paragraph",
  component: Paragraph,
  parameters: {},

  tags: ["autodocs"],
} satisfies Meta<ParagraphProps>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    size: 'default',
    children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  },
};


export const Small: Story = {
    args: {
      size: 'small',
      children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti"
    },
  };


  
  