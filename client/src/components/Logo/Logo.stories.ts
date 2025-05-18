import type { Meta, StoryObj } from "@storybook/react";
import Logo from ".";

const meta = {
  title: "Example/Logo",
  component: Logo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    width: "w-[40px]",
    height: "h-[40px]",
    padding: "p-[4px]",
  },
};

export const Big: Story = {
  args: {
    width: "w-[240px]",
    height: "h-[240px]",
    padding: "p-[30px]",
  },
};
