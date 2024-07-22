import { Meta, StoryFn } from "@storybook/react/*";
import BadgeStatus, { BadgeStatusProps } from "./BadgeStatus";

export default {
  title: "Display/Badge/BadgeStatus",
  component: BadgeStatus,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof BadgeStatus>;

const Template: StoryFn<BadgeStatusProps> = args => <BadgeStatus {...args} />;

export const CustomBadgeStatus = Template.bind({});
CustomBadgeStatus.args = {
  style: "dot",
  status: "success",
};
