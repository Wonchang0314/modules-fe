import { Meta, StoryFn } from "@storybook/react/*";
import Snackbar, { SnackbarProps } from "./Snackbar";

export default {
  title: "Feedback/Snackbar",
  component: Snackbar,
  parameters: {
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof Snackbar>;

const Template: StoryFn<SnackbarProps> = args => <Snackbar {...args} />;

export const CustomSnackbar = Template.bind({});
CustomSnackbar.args = {
  open: true,
  message: "Message",
  lineMessage: "Line message",
  alert: true,
  dismissible: true,
  action: "Action",
};
