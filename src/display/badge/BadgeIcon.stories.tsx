import { Meta, StoryFn } from "@storybook/react/*";
import BadgeIcon, { BadgeIconProps } from "./BadgeIcon";
import { icons } from "src/icon/Icon";

export default {
  title: "Display/Badge/BadgeIcon",
  component: BadgeIcon,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
    },
  },
  tags: ["autodocs"],
} as Meta<typeof BadgeIcon>;

const Template: StoryFn<BadgeIconProps> = args => <BadgeIcon {...args} />;

export const CustomBadgeIcon = Template.bind({});
CustomBadgeIcon.args = {
  icon: "error_spaced_outlined",
  status: "success",
};
