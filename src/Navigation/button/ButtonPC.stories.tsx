import { Meta, StoryFn } from "@storybook/react";
import ButtonPC, { ButtonPropsPC } from "./ButtonPC";
import Icon, { iconKey } from "src/icon/Icon";

export default {
  title: "Navigation/Button/ButtonPC",
  component: ButtonPC,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
} as Meta<typeof ButtonPC>;

const TemplatePC: StoryFn<ButtonPropsPC> = args => {
  return <ButtonPC {...args} />;
};

const tempKey: iconKey = "add";

export const CustomButtonPC = TemplatePC.bind({});
CustomButtonPC.args = {
  style: "primary",
  type: "text",
  state: "enabled",
  round: false,
  text1: "Text1",
  text2: "Text2",
  iconKey: tempKey,
};
