import { Meta, StoryFn } from "@storybook/react/*";
import Icon from "./Icon";
import { icons } from "./Icon";

export default {
  title: "Icon/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = args => <Icon {...args} />;

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: "account",
  size: 24,
  className: "fill-Red-60",
};
