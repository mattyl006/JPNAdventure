import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from ".";
import { ButtonSizeStyle } from "./ButtonSizeStyle";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: ButtonSizeStyle.LARGE,
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: ButtonSizeStyle.SMALL,
    label: "Button",
  },
};

export const PrimaryLarge: Story = {
  args: {
    primary: true,
    label: "Button",
    size: ButtonSizeStyle.LARGE,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled button",
  },
};

export const BlueHover: Story = {
  args: {
    label: "Button with blue hover",
    className: "hover:bg-blue-400",
  },
};
