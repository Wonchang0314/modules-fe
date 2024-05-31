import { Meta, StoryFn } from "@storybook/react/*";
import Icon, { iconTypes } from "./Icon";
import { FlexBox } from "../layout";

export default {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: "bell",
  size: 24,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: 48,
  icon: "bell",
};

export const ListOfIcons: StoryFn = (args) => (
  <FlexBox direction="col" className="gap-8">
    {iconTypes.map((icon) => (
      <Icon {...args} key={icon} icon={icon} size={24} />
    ))}
  </FlexBox>
);

// default 적용
// import 적용
