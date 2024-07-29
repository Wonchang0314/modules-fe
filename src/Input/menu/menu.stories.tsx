import { Meta, StoryFn } from "@storybook/react/*";
import InputMenu from "./inputMenu";
import { MenuItemProps } from "./menuItem";

export default {
  title: "Input/Menu",
  component: InputMenu,
  parameter: {
    layout: "centered",
    componentSubtitle: "얼루가의 menu를 구현한 컴포넌트입니다.",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof InputMenu>;

const simple: MenuItemProps[] = [
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "default",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "default",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "default",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "default",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "default",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "default",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "default",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "default",
    text: "Menu item",
    className: "",
  },
];

const complexLeft: MenuItemProps[] = [
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-left",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-left",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-left",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-left",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-left",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-left",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-left",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-left",
    text: "Menu item",
    className: "",
  },
];

const complexRight: MenuItemProps[] = [
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-right",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-right",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-right",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-right",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-right",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-right",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-right",
    text: "Menu item",
    className: "",
  },
  {
    size: "L",
    state: "enabled",
    style: "simple",
    type: "icon-right",
    text: "Menu item",
    className: "",
  },
];

const Template: StoryFn<typeof InputMenu> = args => {
  return <InputMenu {...args} />;
};

export const InputMenuExample = Template.bind({});
InputMenuExample.args = {
  size: "L",
  className: "",
  items: complexLeft,
};
