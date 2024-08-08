import { Meta, StoryFn } from "@storybook/react/*";
import InputMenu from "./inputMenu";
import MenuItem from "./menuItem";

// eslint-disable-next-line storybook/story-exports
export default {
  title: "Input/Menu/InputMenu",
  component: InputMenu,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
} as Meta<typeof InputMenu>;

const Template: StoryFn<typeof InputMenu> = args => <InputMenu {...args} />;

const temp = Array.from({ length: 8 }).map((_, index) => (
  <MenuItem
    key={index}
    size="L"
    state="enabled"
    style="complex"
    type="icon-right"
    text={`Menu Item`}
    className=""
  />
));

export const Example = Template.bind({});
Example.args = {
  size: "L",
  style: "complex",
  menuItem: temp,
  className: "",
};
