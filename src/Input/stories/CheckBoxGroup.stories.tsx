import { Meta, StoryFn } from "@storybook/react/*";
import CheckBoxGroup, { CheckBoxGroupProps } from "../CheckBoxGroup";

export default {
  title: "Input/CheckBox/CheckBoxGroup",
  component: CheckBoxGroup,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof CheckBoxGroup>;

const Template: StoryFn<CheckBoxGroupProps> = args => (
  <CheckBoxGroup {...args} />
);

export const CustomCheckboxGroup = Template.bind({});
CustomCheckboxGroup.args = {
  titles: ["Checkbox label", "Checkbox label", "Checkbox label"],
  direction: "row",
  size: "M",
  state: "warning",
  label: "Group Label",
  alert: "Warning text",
};
