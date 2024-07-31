import { Meta, StoryFn } from "@storybook/react";
import ButtonMobile, { ButtonPropsMobile } from "./ButtonMobile";
import ButtonPC, { ButtonPropsPC } from "./ButtonPC";
import Button from "./ButtonMobile";

export default {
  title: "Navigation/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
} as Meta<typeof Button>;

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
};

const TemplatePC: StoryFn<ButtonPropsPC> = args => {
  return <ButtonPC {...args} />;
};

export const CustomButtonPC = TemplatePC.bind({});
CustomButtonPC.args = {
  style: "primary",
  type: "text",
  state: "enabled",
  round: false,
  text1: "Text1",
  text2: "Text2",
};
