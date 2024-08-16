import { Meta, StoryFn } from "@storybook/react/*";
import Accordion, { AccordionProps } from "./Accordion";

export default {
  title: "Layout/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    state: {
      options: ["enable", "disabled"],
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Accordion>;

const Template: StoryFn<AccordionProps> = args => (
  <div className="w-[400px]">
    <Accordion {...args} />
  </div>
);

export const CustomAccordion = Template.bind({});
CustomAccordion.args = {
  state: "disabled",
  size: "L",
  title: "Title",
  children: (
    <div className="text-text-primary">
      "An accordion is a vertically stacked list of headers that reveal or hide
      associated sections of content.",
    </div>
  ),
};
