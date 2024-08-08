import { Meta, StoryFn } from "@storybook/react/*";
import TabItem, { TabItemProps } from "./TabItem";
import { icons } from "src/icon/Icon";

export default {
  title: "Navigation/Tabs/TabItem",
  component: TabItem,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    iconName: {
      options: Object.keys(icons),
    },
  },
  tags: ["autodocs"],
} as Meta<typeof TabItem>;

const Template: StoryFn<TabItemProps> = args => <TabItem {...args} />;

export const CustomTabItem = Template.bind({});
CustomTabItem.args = {
  icon: "media_image",
  label: "Label",
  dismissable: true,
  state: "Enabled",
  isFocused: false,
};
