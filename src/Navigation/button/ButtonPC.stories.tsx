import { Meta, StoryFn } from "@storybook/react";
import ButtonPC, { ButtonPropsPC } from "./ButtonPC";
import { iconKeys } from "src/icon/Icon";

export default {
  title: "Navigation/Button/ButtonPC",
  component: ButtonPC,
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
} as Meta<typeof ButtonPC>;

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
  iconKey: "add",
};
