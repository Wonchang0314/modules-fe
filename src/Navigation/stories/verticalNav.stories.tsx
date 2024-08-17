import { Meta, StoryFn } from "@storybook/react/*";
import VerticalNav from "../verticalNav";

export default {
  title: "Navigation/Navigation Bar/Vertical /Nav Bar",
  component: VerticalNav,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  decorators: [
    Story => (
      <div className="w-[80px] h-[400px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} as Meta<typeof VerticalNav>;

const Template: StoryFn<typeof VerticalNav> = args => {
  return <VerticalNav {...args} />;
};

export const CustomNav = Template.bind({});

CustomNav.args = {
  items: [
    { name: "text", onClick: () => console.log("clicked") },
    { name: "text", count: 0, onClick: () => console.log("clicked") },
    { name: "text", count: 0, onClick: () => console.log("clicked") },
  ],
};
