import { Meta, StoryFn } from "@storybook/react/*";
import HorizontalNav from "./horizontalNav";
import HorizontalNavItem from "./horizontalNavItem";

export default {
  title: "Navigation/Navigation Bar/Horizontal/Nav Bar",
  component: HorizontalNav,
  parameters: {
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof HorizontalNav>;

const Template: StoryFn<typeof HorizontalNav> = args => {
  return <HorizontalNav {...args} />;
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
