import { Meta, StoryFn } from "@storybook/react/*";
import TopBar from "./topBar";
import { icons } from "src/icon/Icon";

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
  argTypes: {
    leftIcon: {
      description: `type: iconKey`,
      options: Object.keys(icons),
    },
    rightIcon: {
      description: `type: iconKey`,
      options: Object.keys(icons),
    },
    rightText: {
      description: `type: string | iconKey`,
      options: Object.keys(icons),
    },
    rightIconUnread: {
      description: "true일 때 안 읽음 표시<br/>* icon이 있을 때만 표시됨",
    },
    rightTextUnread: {
      description:
        "true일 때 안 읽음 표시<br/>* rightText의 type=iconKey인 경우에만 표시됨",
    },
  },
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
};
Example2.args = {
  title: "Title",
  leftText: "Text",
  rightText: "Text",
};
