import { Meta, StoryFn } from "@storybook/react/*";
import SnackBar, { SnackBarProps } from "../SnackBar";

export default {
  title: "Feedback/SnackBar",
  component: SnackBar,
  parameters: {
    backgrounds: { default: "light" },
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
};
