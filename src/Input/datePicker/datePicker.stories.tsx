import { Meta, StoryFn } from "@storybook/react/*";
import { useArgs } from "@storybook/preview-api";
import { ChangeEvent, useEffect, useState } from "react";
import DatePicker from "./datePicker";

export default {
  title: "Input/Date Picker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
    docs: {
      description: {
        component: "width = 332px (fixed)",
      },
    },
  },
  argTypes: {
    value: {
      description: "형식: 'YYYY-DD-MM'",
    },
  },
  decorators: [
    Story => (
      <div className="w-full h-[430px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = args => {
  const [input, setInput] = useState<string>("");

  return <DatePicker {...args} value={input} setValue={setInput} />;
};

export const Example = Template.bind({});
Example.args = {
  state: "enable",
};
