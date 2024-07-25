import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";

export default {
  title: "Foundation/Motion",
  component: Modal,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    animationEnter: {
      control: "select",
      options: [
        "animate-tranquillo-enter",
        "animate-brillante-enter",
        "animate-linear-default",
      ],
    },
    animationExit: {
      control: "select",
      options: [
        "animate-tranquillo-exit",
        "animate-brillante-exit",
        "animate-linear-default",
      ],
    },
    text: {
      control: "text",
    },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<ModalProps> = (args) => {
  return <Modal {...args} />;
};

export const TestMotion = Template.bind({});
TestMotion.args = {
  animationEnter: "animate-tranquillo-enter",
  animationExit: "animate-tranquillo-exit",
  text: "ㅎㅇ",
};
