import { Meta, StoryFn } from "@storybook/react";
import SpacingLayout, { SpacingProps, spacingConfig } from "./SpacingLayout";
import TestButton from "../../Navigation/button/ButtonMobile";

export default {
  title: "Foundation/Spacing",
  component: SpacingLayout,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    margin: {
      control: "select",
      options: ["", ...Object.keys(spacingConfig.margin)],
    },
    padding: {
      control: "select",
      options: ["", ...Object.keys(spacingConfig.padding)],
    },
    gap: {
      control: "select",
      options: ["", ...Object.keys(spacingConfig.gap)],
    },
    spaceX: {
      control: "select",
      options: ["", ...Object.keys(spacingConfig.spaceX)],
    },
    spaceY: {
      control: "select",
      options: ["", ...Object.keys(spacingConfig.spaceY)],
    },
  },
} as Meta<typeof SpacingLayout>;

const Template: StoryFn<SpacingProps> = args => {
  return (
    <SpacingLayout {...args}>
      <TestButton
        size="L"
        style={"primary"}
        type={"text"}
        state={"enabled"}
        round={false}
        text1={"Text"}
        text2={"Text"}
      />
      <TestButton
        size="L"
        style={"primary"}
        type={"text"}
        state={"enabled"}
        round={false}
        text1={"Text"}
        text2={"Text"}
      />
    </SpacingLayout>
  );
};

export const TestSpacing = Template.bind({});
TestSpacing.args = {
  margin: "",
  padding: "",
  gap: "",
  spaceX: "",
  spaceY: "",
};
