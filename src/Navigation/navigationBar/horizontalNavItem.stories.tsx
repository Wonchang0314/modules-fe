import { Meta, StoryFn } from "@storybook/react/*";
import HorizontalNavItem from "./horizontalNavItem";
import { icons } from "src/icon/Icon";

export default {
  title: "Navigation/Navigation Bar/Horizontal/Nav Bar Item",
  component: HorizontalNavItem,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      options: Object.keys(icons),
      description: "type: iconKey",
    },
  },
} as Meta<typeof HorizontalNavItem>;

const Template: StoryFn<typeof HorizontalNavItem> = args => {
  return <HorizontalNavItem {...args} />;
};

export const Example = Template.bind({});

Example.args = {
  name: "Label",
  icon: "folder",
  onClick: () => console.log("clicked"),
  isFocused: true,
};
