import { Meta, StoryFn } from "@storybook/react/*";
import Divider, { DividerProps } from "../Divider";

export default {
  title: "Layout/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
} as Meta<typeof Divider>;

const Template: StoryFn<DividerProps> = args => <Divider {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  type: "Horizontal",
  size: 100,
  subheader: " I'm a subheader",
};

export const Vertical = Template.bind({});
Vertical.args = {
  type: "Vertical",
  size: 100,
  className: "bg-support-error",
};
