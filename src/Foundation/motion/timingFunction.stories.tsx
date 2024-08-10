import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FlexBox } from "src/layout";

export default {
  title: "Foundation/Motion/TimingFunction",
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
} as Meta;

const TestMotion: React.FC<{ className: string }> = ({ className }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <FlexBox direction="col">
      <div
        className="w-[528px] h-[86px] mb-4 bg-Orange-10 border-4 border-Orange-30 rounded-[43px] relative cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={`absolute w-[62px] h-[62px] top-[8px] left-[12px] bg-Orange-30 rounded-[43px] transition-transform duration-1000 ${className} ${
            isClicked ? "translate-x-[435px]" : ""
          }`}
        ></div>
      </div>
    </FlexBox>
  );
};

const Template: StoryFn = () => (
  <FlexBox direction="col">
    <div className="flex">
      <p className="m-8">className: ease-tranquillo-default</p>
      <TestMotion className="ease-tranquillo-default" />
    </div>
    <div className="flex">
      <p className="m-8">className: ease-tranquillo-enter</p>
      <TestMotion className="ease-tranquillo-enter" />
    </div>
    <div className="flex">
      <p className="m-8">className: ease-tranquillo-exit</p>
      <TestMotion className="ease-tranquillo-exit" />
    </div>
    <div className="flex">
      <p className="m-8">className: ease-brillante-default</p>
      <TestMotion className="ease-brillante-default" />
    </div>
    <div className="flex">
      <p className="m-8">className: ease-brillante-enter</p>
      <TestMotion className="ease-brillante-enter" />
    </div>
    <div className="flex">
      <p className="m-8">className: ease-brillante-exit</p>
      <TestMotion className="ease-brillante-exit" />
    </div>
    <div className="flex">
      <p className="m-8">className: ease-linear-default</p>
      <TestMotion className="ease-linear-default" />
    </div>
  </FlexBox>
);

export const Examples = Template.bind({});
