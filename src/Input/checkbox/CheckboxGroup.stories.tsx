import { Meta, StoryFn } from "@storybook/react/*";
import CheckboxGroup, { CheckboxGroupProps } from "./CheckboxGroup";

export default {
  title: "Input/Checkbox/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof CheckboxGroup>;

const Template: StoryFn<CheckboxGroupProps> = args => (
  <CheckboxGroup {...args} />
);

export const CustomCheckboxGroup = Template.bind({});
CustomCheckboxGroup.args = {
  titles: ["Checkbox label", "Checkbox label", "Checkbox label"],
  direction: "row",
  size: "M",
  state: "Warning",
  label: "Group Label",
  alert: "Warning text",
};
