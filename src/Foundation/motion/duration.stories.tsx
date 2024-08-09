import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FlexBox } from "src/layout";

export default {
  title: "Foundation/Motion/Duration",
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
          className={`absolute w-[62px] h-[62px] top-[8px] left-[12px] bg-Orange-30 rounded-[43px] transition-transform ${className} ${
            isClicked ? "translate-x-[435px]" : ""
          }`}
        ></div>
      </div>
    </FlexBox>
  );
};

const Template: StoryFn = () => (
  <div>
    <div className="flex">
      <p className="m-8">className: duration-duration-01</p>
      <TestMotion className="duration-duration-01" />
    </div>
    <div className="flex">
      <p className="m-8">className: duration-duration-02</p>
      <TestMotion className="duration-duration-02" />
    </div>
    <div className="flex">
      <p className="m-8">className: duration-duration-03</p>
      <TestMotion className="duration-duration-03" />
    </div>
    <div className="flex">
      <p className="m-8">className: duration-duration-04</p>
      <TestMotion className="duration-duration-04" />
    </div>
    <div className="flex">
      <p className="m-8">className: duration-duration-05</p>
      <TestMotion className="duration-duration-05" />
    </div>
    <div className="flex">
      <p className="m-8">className: duration-duration-06</p>
      <TestMotion className="duration-duration-06" />
    </div>
    <div className="flex">
      <p className="m-8">className: duration-duration-07</p>
      <TestMotion className="duration-duration-07" />
    </div>
    <div className="flex">
      <p className="m-8">className: duration-duration-08</p>
      <TestMotion className="duration-duration-08" />
    </div>
    <div className="flex">
      <p className="m-8">className: duration-duration-09</p>
      <TestMotion className="duration-duration-09" />
    </div>
    <div className="flex">
      <p className="m-8">className: duration-duration-10</p>
      <TestMotion className="duration-duration-10" />
    </div>
    <div className="flex">
      <p className="m-8">className: duration-duration-11</p>
      <TestMotion className="duration-duration-11" />
    </div>
    <div className="flex">
      <p className="m-8">className: duration-duration-12</p>
      <TestMotion className="duration-duration-12" />
    </div>
    <div className="flex">
      <p className="m-8">className: duration-duration-13</p>
      <TestMotion className="duration-duration-13" />
    </div>
  </div>
);

export const Examples = Template.bind({});
