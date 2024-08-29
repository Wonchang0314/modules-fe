import { Meta, StoryFn } from "@storybook/react/*";
import RadioGroup, { RadioGroupProps } from "../RadioGroup";

export default {
  title: "Input/Radio/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof RadioGroup>;

const Template: StoryFn<RadioGroupProps> = args => <RadioGroup {...args} />;

export const CustomRadioGroup = Template.bind({});
CustomRadioGroup.args = {
  titles: ["Radio label", "Radio label", "Radio label"],
  direction: "row",
  size: "M",
  state: "warning",
  label: "Group Label",
  alert: "Warning text",
};
