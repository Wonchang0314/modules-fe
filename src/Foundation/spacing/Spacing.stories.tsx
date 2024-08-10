import React from "react";
import { Meta, StoryFn } from "@storybook/react";

interface SpacingConfig {
  margin: Record<string, string>;
  padding: Record<string, string>;
  gap: Record<string, string>;
  spaceX: Record<string, string>;
  spaceY: Record<string, string>;
}

const spacingConfig: SpacingConfig = {
  margin: {
    "spacing-01": "m-spacing-01",
    "spacing-02": "m-spacing-02",
    "spacing-03": "m-spacing-03",
    "spacing-04": "m-spacing-04",
    "spacing-05": "m-spacing-05",
    "spacing-06": "m-spacing-06",
    "spacing-07": "m-spacing-07",
    "spacing-08": "m-spacing-08",
    "spacing-09": "m-spacing-09",
    "spacing-10": "m-spacing-10",
  },
  padding: {
    "spacing-01": "p-spacing-01",
    "spacing-02": "p-spacing-02",
    "spacing-03": "p-spacing-03",
    "spacing-04": "p-spacing-04",
    "spacing-05": "p-spacing-05",
    "spacing-06": "p-spacing-06",
    "spacing-07": "p-spacing-07",
    "spacing-08": "p-spacing-08",
    "spacing-09": "p-spacing-09",
    "spacing-10": "p-spacing-10",
  },
  gap: {
    "spacing-01": "gap-spacing-01",
    "spacing-02": "gap-spacing-02",
    "spacing-03": "gap-spacing-03",
    "spacing-04": "gap-spacing-04",
    "spacing-05": "gap-spacing-05",
    "spacing-06": "gap-spacing-06",
    "spacing-07": "gap-spacing-07",
    "spacing-08": "gap-spacing-08",
    "spacing-09": "gap-spacing-09",
    "spacing-10": "gap-spacing-10",
  },
  spaceX: {
    "spacing-01": "space-x-spacing-01",
    "spacing-02": "space-x-spacing-02",
    "spacing-03": "space-x-spacing-03",
    "spacing-04": "space-x-spacing-04",
    "spacing-05": "space-x-spacing-05",
    "spacing-06": "space-x-spacing-06",
    "spacing-07": "space-x-spacing-07",
    "spacing-08": "space-x-spacing-08",
    "spacing-09": "space-x-spacing-09",
    "spacing-10": "space-x-spacing-10",
  },
  spaceY: {
    "spacing-01": "space-y-spacing-01",
    "spacing-02": "space-y-spacing-02",
    "spacing-03": "space-y-spacing-03",
    "spacing-04": "space-y-spacing-04",
    "spacing-05": "space-y-spacing-05",
    "spacing-06": "space-y-spacing-06",
    "spacing-07": "space-y-spacing-07",
    "spacing-08": "space-y-spacing-08",
    "spacing-09": "space-y-spacing-09",
    "spacing-10": "space-y-spacing-10",
  },
};

export default {
  title: "Foundation/Spacing",
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
} as Meta;

const Template: StoryFn = () => (
  <div className="flex flex-col gap-8">
    <div>
      <h2 className="text-lg font-bold mb-2">Margin</h2>
      <h3 className="text-lg mb-2">className: m-spacing-[01-10]</h3>
      <div className="flex flex-col gap-4">
        {Object.keys(spacingConfig.margin).map(key => (
          <div key={key} className="flex items-center">
            <div
              className={`${spacingConfig.margin[key]} border-4 border-gray-400 p-2`}
            >
              {key}
            </div>
            <div className="border-4 border-gray-400 p-2">Neighbor</div>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h2 className="text-lg font-bold mb-2">Padding</h2>
      <h3 className="text-lg mb-2">className: p-spacing-[01-10]</h3>
      <div className="flex flex-wrap gap-4">
        {Object.keys(spacingConfig.padding).map(key => (
          <div key={key} className="border-4 border-gray-400">
            <div
              className={`${spacingConfig.padding[key]} border-4 border-gray-400 p-2`}
            >
              {key}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h2 className="text-lg font-bold mb-2">Gap</h2>
      <h3 className="text-lg mb-2">className: gap-spacing-[01-10]</h3>
    </div>
    <div>
      <h2 className="text-lg font-bold mb-2">SpaceX</h2>
      <h3 className="text-lg mb-2">className: space-x-spacing-[01-10]</h3>
    </div>
    <div>
      <h2 className="text-lg font-bold mb-2">SpaceY</h2>
      <h3 className="text-lg mb-2">className: space-y-spacing-[01-10]</h3>
    </div>
  </div>
);

export const Example = Template.bind({});
