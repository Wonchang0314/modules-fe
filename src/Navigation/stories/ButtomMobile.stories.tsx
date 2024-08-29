import { Meta, StoryFn } from "@storybook/react";
import ButtonMobile, { ButtonPropsMobile } from "../ButtonMobile";
import { iconKeys } from "src/icon/Icon";

export default {
  title: "Navigation/Button/ButtonMobile",
  component: ButtonMobile,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    iconKey: {
      options: iconKeys,
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
} as Meta<typeof ButtonMobile>;

const TemplateMobile: StoryFn<ButtonPropsMobile> = args => {
  return <ButtonMobile {...args} />;
};

export const CustomButtonMobile = TemplateMobile.bind({});
CustomButtonMobile.args = {
  size: "L",
  style: "primary",
  type: "text",
  state: "enabled",
  round: false,
  text1: "Text1",
  text2: "Text2",
  iconKey: "add",
};
