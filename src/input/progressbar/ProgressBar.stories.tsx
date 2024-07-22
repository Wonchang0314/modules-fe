import { Meta, StoryFn } from "@storybook/react/*";
import ProgressBar, { ProgressBarProps } from "./ProgressBar";

export default {
  title: "Input/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof ProgressBar>;

const Template: StoryFn<ProgressBarProps> = args => (
  <div className="w-[328px]">
    <ProgressBar {...args} />{" "}
  </div>
);

export const CustomProgressBar = Template.bind({});
CustomProgressBar.args = {
  size: "L",
  value: 22,
  label: "Progress Bar Label",
};
