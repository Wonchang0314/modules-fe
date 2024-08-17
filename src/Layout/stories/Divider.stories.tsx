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

export const CustomHorizontalDivider = Template.bind({});
CustomHorizontalDivider.args = {
  type: "Horizontal",
  size: 100,
  subHeader: " I'm a subheader",
};

export const CustomVerticalDivider = Template.bind({});
CustomVerticalDivider.args = {
  type: "Vertical",
  size: 100,
  className: "bg-support-error",
};
