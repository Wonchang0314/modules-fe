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
  title: "Title",
  description: "Description",
  lefttext: "Button",
  righttext: "Button",
  dismissible: true,
  label: true,
  labeltext: "Label",
};
