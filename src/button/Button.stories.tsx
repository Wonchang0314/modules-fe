import { Meta, StoryFn } from "@storybook/react";
import ButtonMobile, {
  ButtonPropsMobile,
  buttonStyleMobile as buttonStyleMobile,
} from "./ButtonMobile";
import ButtonPC, {
  ButtonPropsPC,
  buttonStylePC as buttonStylePC,
} from "./ButtonPC";
import {
  getMobileStateInfo,
  getPcStateInfo,
  getPropsMobileInfo,
  getPropsPCInfo,
} from "./getPropsInfo";
import Button from "./ButtonMobile";

type Button = ButtonPropsMobile | ButtonPropsPC;

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
} as Meta<typeof Button>;

const TemplateMobile: StoryFn<typeof ButtonMobile> = args => {
  const color = getMobileStateInfo(args, buttonStyleMobile);

  return (
    <>
      <ButtonMobile {...args} />
      {getPropsMobileInfo(args, color)}
    </>
  );
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
  onClick: undefined,
};

const TemplatePC: StoryFn<typeof ButtonPC> = args => {
  const color = getPcStateInfo(args, buttonStylePC);

  return (
    <>
      <ButtonPC {...args} />
      {getPropsPCInfo(args, color)}
    </>
  );
};

export const CustomButtonPC = TemplatePC.bind({});
CustomButtonPC.args = {
  style: "primary",
  type: "text",
  state: "enabled",
  round: false,
  text1: "Text1",
  text2: "Text2",
  onClick: undefined,
};
