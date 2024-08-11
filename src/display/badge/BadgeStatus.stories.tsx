import { Meta, StoryFn } from "@storybook/react/*";
import Badgestatus, { BadgestatusProps } from "./BadgeStatus";

export default {
  title: "Display/Badge/Badgestatus",
  component: Badgestatus,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    state: {
      options: ["success", "warning", "error", "processing"],
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Badgestatus>;

const Template: StoryFn<BadgestatusProps> = args => <Badgestatus {...args} />;

export const CustomBadgestatus = Template.bind({});
CustomBadgestatus.args = {
  style: "dot",
  state: "success",
};
