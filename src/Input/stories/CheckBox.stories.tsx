import { Meta, StoryFn } from "@storybook/react/*";
import CheckBox, { CheckBoxProps } from "../Checkbox";

export default {
  title: "Input/CheckBox/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof CheckBox>;

const Template: StoryFn<CheckBoxProps> = args => <CheckBox {...args} />;

export const CustomCheckbox = Template.bind({});
CustomCheckbox.args = {
  title: "Checkbox label",
  size: "M",
  state: "enable",
  label: "Label",
  alert: "Warning text",
};
