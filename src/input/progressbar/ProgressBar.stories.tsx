import { Meta, StoryFn } from "@storybook/react/*";
import ProgressBar, { ProgressBarProps } from "./ProgressBar";

export default {
  title: "Input/Progress Bar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      description:
        "0~100사이 숫자만 가능. <br/>* 100 이상의 숫자 입력시 자동으로 100으로 변환",
    },
  },
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
