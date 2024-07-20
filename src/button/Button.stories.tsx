import { Meta, StoryFn } from "@storybook/react";
import Button, { buttonStyle } from "./Button_Mobile";
import { getStateInfo, getPropsInfo } from "./getPropsInfo";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["L", "M", "S"],
      },
    },
    style: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "border",
          "ghost",
          "danger_primary",
          "danger_border",
          "danger_ghost",
          "elevated_primiary",
        ],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["text-icon", "icon", "text", "text-text"],
      },
    },
    state: {
      control: {
        type: "select",
        options: ["enabled", "hover", "active", "disabled"],
      },
    },
    leftIcon: {
      control: "boolean",
    },
    round: {
      control: "boolean",
    },
    text1: {
      control: "text",
    },
    text2: {
      control: "text",
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => {
  const color = getStateInfo(args, buttonStyle);

  return (
    <>
      <Button {...args} />
      {getPropsInfo(args, color)}
    </>
  );
};

export const CustomButtonMobile = Template.bind({});
CustomButtonMobile.args = {
  size: "L",
  style: "primary",
  type: "text",
  state: "enabled",
  leftIcon: false,
  round: false,
  text1: "Text1",
  text2: "Text2",
  onClick: undefined,
};

const TemplatePC: StoryFn<typeof Button> = args => {
  const color = getStateInfo(args, buttonStyle);

  return (
    <>
      <Button {...args} />
      {getPropsInfo(args, color)}
    </>
  );
};

export const CustomButtonPC = TemplatePC.bind({});
CustomButtonPC.args = {
  style: "primary",
  type: "text-text",
  state: "enabled",
  leftIcon: false,
  round: false,
  text1: "Text1",
  text2: "Text2",
  onClick: undefined,
};
