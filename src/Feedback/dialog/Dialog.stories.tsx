import { Meta, StoryFn } from "@storybook/react/*";
import Dialog, { DialogProps } from "./Dialog";

export default {
  title: "Feedback/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof Dialog>;

const Template: StoryFn<DialogProps> = args => <Dialog {...args} />;

export const CustomDialog = Template.bind({});
CustomDialog.args = {
  open: true,
  title: "Title",
  leftText: "LeftButton",
  rightText: "RightButton",
  description: "Description",
  dismissible: true,
  label: "Label",
};
