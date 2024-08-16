import { Meta, StoryFn } from "@storybook/react/*";
import Radio, { RadioProps } from "./Radio";

export default {
  title: "Input/Radio/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof Radio>;

const Template: StoryFn<RadioProps> = args => <Radio {...args} />;

export const CustomRadio = Template.bind({});
CustomRadio.args = {
  title: "Radio label",
  size: "M",
  state: "enable",
  label: "Label",
  alert: "Warning text",
};
