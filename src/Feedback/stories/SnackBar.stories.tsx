import { Meta, StoryFn } from "@storybook/react/*";
import SnackBar, { SnackBarProps } from "../SnackBar";
import { icons } from "src/icon/Icon";

export default {
  title: "Feedback/SnackBar",
  component: SnackBar,
  parameters: {
    backgrounds: { default: "light" },
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
    },
  },
  tags: ["autodocs"],
} as Meta<typeof SnackBar>;

const Template: StoryFn<SnackBarProps> = args => <SnackBar {...args} />;

export const CustomSnackbar = Template.bind({});
CustomSnackbar.args = {
  open: true,
  message: "Message",
  lineMessage: "Line message",
  alert: true,
  dismissible: true,
  action: "Action",
  icon: "warning_triangle_filled",
  iconColor: "fill-support-warning",
};
