import { Meta, StoryFn } from "@storybook/react/*";
import BadgeCount, { BadgeCountProps } from "./BadgeCount";

export default {
  title: "Display/Badge/BadgeCount",
  component: BadgeCount,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof BadgeCount>;

const Template: StoryFn<BadgeCountProps> = args => <BadgeCount {...args} />;

export const CustomBadgeCount = Template.bind({});
CustomBadgeCount.args = {
  count: 11,
  status: "success",
};
