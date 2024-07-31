import { Meta, StoryFn } from "@storybook/react/*";
import MenuItem from "./menuItem";

export default {
  title: "Input/Menu/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
} as Meta<typeof MenuItem>;

const Template: StoryFn<typeof MenuItem> = args => <MenuItem {...args} />;

export const Example = Template.bind({});
Example.args = {
  size: "L",
  state: "enabled",
  style: "simple",
  type: "default",
  text: "Menu Item",
  className: "",
};
