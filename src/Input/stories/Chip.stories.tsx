import { Meta, StoryFn } from "@storybook/react/*";
import Chip, { ChipProps } from "../Chip";
import { icons } from "src/icon/Icon";

export default {
  title: "Input/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
    },
    state: {
      options: ["enable", "disabled"],
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Chip>;

const Template: StoryFn<ChipProps> = args => <Chip {...args} />;

export const CustomChip = Template.bind({});
CustomChip.args = {
  size: "L",
  state: "enable",
  dismissible: false,
  icon: "fish",
  label: "Chip",
  color: "yellow",
  readOnly: false,
};
