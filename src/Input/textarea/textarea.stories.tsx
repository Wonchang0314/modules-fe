import { Meta, StoryFn } from "@storybook/react/*";
import { useArgs } from "@storybook/preview-api";
import { ChangeEvent, useEffect, useState } from "react";
import TextArea from "./textarea";

export default {
  title: "Input/Text Area",
  component: TextArea,
  parameters: {
    layout: "centered",
    componentSubtitle: "얼루가의 Text Area를 구현한 컴포넌트입니다.",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = args => {
  const [{ value }, updateArgs] = useArgs();

  const handleValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateArgs({ value: e.target.value });
  };

  return <TextArea {...args} value={value} onChange={handleValue} />;
};

export const Example = Template.bind({});
Example.args = {
  size: "L",
  state: "active",
  label: "Label",
  description: "Helper text",
  placeholder: "Placeholder Text",
};
