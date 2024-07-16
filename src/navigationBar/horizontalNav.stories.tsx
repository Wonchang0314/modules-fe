import { Meta, StoryFn } from "@storybook/react/*";
import Navigation from "./horizontalNav";
import HorizontalNavItem from "./horizontalNavItem";
import FolderIcon from "../icon/svg/file/folder.svg";

export default {
  title: "Navigation/Navigation Bar/Horizontal/Nav Bar",
  component: Navigation,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof Navigation>;

const Template: StoryFn<typeof Navigation> = args => {
  return <Navigation {...args} />;
};

export const Example = Template.bind({});

Example.args = {
  items: [
    {
      name: "menu",
      icon: "menu",
      onClick: () => console.log("clicked"),
    },
    {
      name: "home",
      icon: "home",
      onClick: () => console.log("clicked"),
    },
    {
      name: "search",
      icon: "search",
      onClick: () => console.log("clicked"),
    },
  ],
};
