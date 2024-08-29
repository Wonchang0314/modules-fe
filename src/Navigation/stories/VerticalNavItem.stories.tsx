import { Meta, StoryFn } from "@storybook/react/*";
import VerticalNavItem from "../VerticalNavItem";

export default {
  title: "Navigation/Navigation Bar/Vertical/Nav Bar Item",
  component: VerticalNavItem,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  decorators: [
    Story => (
      <div className="w-[240px] h-[300px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} as Meta<typeof VerticalNavItem>;

const Template: StoryFn<typeof VerticalNavItem> = args => {
  return <VerticalNavItem {...args} />;
};

export const CustomNavItem = Template.bind({});

CustomNavItem.args = {
  name: "Label",
  count: undefined,
  onClick: () => console.log("clicked"),
  isFocused: true,
};
