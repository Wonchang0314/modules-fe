import { Meta, StoryFn } from "@storybook/react/*";
import Avatar, { AvatarProps } from "../Avatar";
import { icons } from "src/icon/Icon";

export default {
  title: "Display/Avatar",
  component: Avatar,
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
} as Meta<typeof Avatar>;

const Template: StoryFn<AvatarProps> = args => <Avatar {...args} />;

export const CustomAvatar = Template.bind({});
CustomAvatar.args = {
  input: "text",
  size: "M",
  text: "A",
  icon: "account",
  image:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
};
