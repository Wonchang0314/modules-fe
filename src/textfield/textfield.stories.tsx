import { Meta, StoryFn } from "@storybook/react/*";
import { useArgs } from "@storybook/preview-api";
import TextField from "./textfield";
import { ChangeEvent, useEffect, useState } from "react";

export default {
  title: "Input/Text Field",
  component: TextField,
  parameters: {
    layout: "centered",
    componentSubtitle: "얼루가의 텍스트 필드를 구현한 컴포넌트입니다.",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof TextField>;

const Template: StoryFn<typeof TextField> = args => {
  const [{ value }, updateArgs] = useArgs();

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    updateArgs({ value: e.target.value });
  };

  return <TextField {...args} value={value} onChange={handleValue} />;
};

export const Example = Template.bind({});
Example.args = {
  size: "L",
  style: "outlined",
  state: "active",
  label: true,
  labelText: "Label",
  description: true,
  descriptionText: "Helper text",
  placeholder: "Placeholder Text",
};
