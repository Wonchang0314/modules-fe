import { Meta, StoryFn } from "@storybook/react/*";
import Switch, { SwitchProps } from "./Switch";

export default {
  title: "Input/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    state: {
      options: ["enable", "disabled", "readOnly"],
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Switch>;

const Template: StoryFn<SwitchProps> = args => <Switch {...args} />;

export const CustomSwitch = Template.bind({});
CustomSwitch.args = {
  state: "enable",
  title: "State text",
  label: "Label",
};
