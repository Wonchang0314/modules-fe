import { Meta, StoryFn } from "@storybook/react/*";
import NumberStepper from "./numberStepper";
import { useState } from "react";

export default {
  title: "Input/Number Stepper",
  component: NumberStepper,
  parameters: {
    backgrounds: { default: "light" },
    docs: {
      description: {
        component:
          "참고<br/>onClickMinusIcon & onClickPlusIcon 에는 기본적으로 count값을 증감하는 기능이 포함되어 있습니다.<br/>추가하고 싶은 함수가 있는 경우에만 활용하시면 됩니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onClickTrashIcon: {
      description: "width='short'인 경우에만 동작함",
    },
  },
} as Meta<typeof NumberStepper>;

const Template: StoryFn<typeof NumberStepper> = args => {
  const [count, setCount] = useState<number>(1);
  return <NumberStepper {...args} count={count} setCount={setCount} />;
};

export const LongVersion = Template.bind({});
LongVersion.args = {
  width: "long",
  size: "M",
};

export const LongVersionWithRightAlignedDescriptionText = Template.bind({});
LongVersionWithRightAlignedDescriptionText.args = {
  width: "long",
  size: "M",
  state: "warning",
  description: "Helper Text",
  descriptionAlign: "right",
};

export const ShortVersion = Template.bind({});
ShortVersion.args = {
  width: "short",
  size: "M",
  description: "Helper Text",
  descriptionAlign: "right",
};
ShortVersion.parameters = {
  layout: "centered",
};

export const ShortVersionWithLeftAlignedDescriptionText = Template.bind({});
ShortVersionWithLeftAlignedDescriptionText.args = {
  width: "short",
  size: "M",
  state: "error",
  description: "Helper Text",
  descriptionAlign: "left",
};
ShortVersionWithLeftAlignedDescriptionText.parameters = {
  layout: "centered",
};
