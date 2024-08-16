import { Meta, StoryFn } from "@storybook/react/*";
import Checkbox, { CheckboxProps } from "./Checkbox";

export default {
  title: "Input/Checkbox/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof Checkbox>;

const Template: StoryFn<CheckboxProps> = args => <Checkbox {...args} />;

export const CustomCheckbox = Template.bind({});
CustomCheckbox.args = {
  title: "Checkbox label",
  size: "M",
  state: "enable",
  label: "Label",
  alert: "Warning text",
};
