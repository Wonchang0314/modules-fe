import { Meta, StoryFn } from "@storybook/react/*";
import MenuItem from "../menuItem";

export default {
  title: "Input/Menu/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    state: {
      options: ["enable", "disabled", "error"],
    },
  },
  tags: ["autodocs"],
} as Meta<typeof MenuItem>;

const Template: StoryFn<typeof MenuItem> = args => <MenuItem {...args} />;

export const CustomMenuItem = Template.bind({});
CustomMenuItem.args = {
  size: "L",
  state: "enable",
  type: "icon-right",
  text: "Menu Item",
  className: "",
};
