import { Meta, StoryFn } from "@storybook/react/*";
import Tabs, { TabsProps } from "./Tabs";

export default {
  title: "Input/Tabs/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof Tabs>;

const Template: StoryFn<TabsProps> = args => <Tabs {...args} />;

export const CustomTabs = Template.bind({});
CustomTabs.args = {
  state: "Enabled",
  items: [
    {
      iconName: "home",
      label: "Home",
      dismissable: false,
      onClick: () => console.log("Home clicked"),
    },
    {
      iconName: "menu",
      label: "Menu",
      dismissable: false,
      onClick: () => console.log("Menu clicked"),
    },
    {
      iconName: "search",
      label: "Search",
      dismissable: false,
      onClick: () => console.log("Search clicked"),
    },
  ],
};
