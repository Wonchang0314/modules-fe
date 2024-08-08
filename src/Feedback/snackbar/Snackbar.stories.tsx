import { Meta, StoryFn } from "@storybook/react/*";
import Snackbar, { SnackbarProps } from "./Snackbar";

export default {
  title: "Feedback/Snackbar/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof Snackbar>;

const Template: StoryFn<SnackbarProps> = args => <Snackbar {...args} />;

export const CustomSnackbar = Template.bind({});
CustomSnackbar.args = {
  message: "Message",
  lineMessage: "Line message",
  alert: true,
  dismissible: true,
  action: "Action",
};
