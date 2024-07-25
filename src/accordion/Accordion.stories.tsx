import { Meta, StoryFn } from "@storybook/react/*";
import Accordion, { AccordionProps } from "./Accordion";

export default {
  title: "Layout/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof Accordion>;

const Template: StoryFn<AccordionProps> = args => <Accordion {...args} />;

export const CustomAccordion = Template.bind({});
CustomAccordion.args = {
  state: "Disabled",
  size: "L",
  data: [
    {
      title: "Title",
      content:
        "An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.",
      children: (
        <div className="w-[336px] h-[32px] bg-black text-white p-2">
          changer
        </div>
      ),
    },
    {
      title: "Title",
      content:
        "An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.",
    },
  ],
};
