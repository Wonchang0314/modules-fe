import { Meta, StoryFn } from "@storybook/react/*";
import Chip, { ChipProps } from "./Chip";

export default {
  title: "Input/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof Chip>;

const Template: StoryFn<ChipProps> = args => <Chip {...args} />;

export const CustomChip = Template.bind({});
CustomChip.args = {
  size: "L",
  state: "Enabled",
  dismissible: false,
  icon: true,
  iconName: "fish",
  label: "Chip",
  color: "Yellow",
  readonly: false,
};
