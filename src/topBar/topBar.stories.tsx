import { Meta, StoryFn } from "@storybook/react/*";
import TopBar from "./topBar";

export default {
  title: "Navigation/Top Bar",
  component: TopBar,
  parameters: {
    docs: {
      description: {
        component:
          "이 컴포넌트는 상단 네비게이션 바를 표시합니다.<br/>순서: leftIcon - leftText - title - rightText - rightIcon<br/>오른쪽 아이콘이 2개인 경우, rightText를 rightIcon처럼 활용할 수 있습니다.",
      },
    },
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
} as Meta<typeof TopBar>;

const Template: StoryFn<typeof TopBar> = args => {
  return <TopBar {...args} />;
};

export const Example = Template.bind({});
export const Example2 = Template.bind({});

Example.args = {
  title: "Title",
  leftIcon: "chevron_left_outlined",
  leftText: "Text",
  rightIcon: "gear",
  rightText: "menu",
  rightIconUnread: true,
};
Example2.args = {
  title: "Title",
  leftText: "Text",
  rightText: "Text",
};
