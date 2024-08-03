import { Meta, StoryFn } from "@storybook/react/*";
import TabItem, { TabItemProps } from "./TabItem";

export default {
  title: "Input/Tabs/TabItem",
  component: TabItem,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof TabItem>;

const Template: StoryFn<TabItemProps> = args => <TabItem {...args} />;

export const CustomTabItem = Template.bind({});
CustomTabItem.args = {
  iconName: "media_image",
  label: "Label",
  dismissable: true,
  state: "Enabled",
  isFocused: false,
};
