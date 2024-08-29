import { Meta, StoryFn } from "@storybook/react/*";
import InputMenu from "../InputMenu";
import MenuItem from "../MenuItem";

export default {
  title: "Input/Menu/InputMenu",
  component: InputMenu,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof InputMenu>;

const Template: StoryFn<typeof InputMenu> = args => <InputMenu {...args} />;

const temp = Array.from({ length: 8 }).map((_, index) => (
  <MenuItem
    key={index}
    size="L"
    state="enable"
    type="icon-right"
    text={`Menu Item`}
    iconKey="fruit_apple"
    className=""
  />
));

export const CustomInputMenu = Template.bind({});
CustomInputMenu.args = {
  size: "L",
  menuItem: temp,
  className: "",
};
