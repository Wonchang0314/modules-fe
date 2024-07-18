//애니메이션 정의 필요
//focus 작동 안됨

import FlexBox from "layout/FlexBox";
import { useState } from "react";
import Divider from "src/divider/Divider";
import Icon from "src/icon/Icon";

export interface AccordionProps {
  state: "Enabled" | "Disabled";
  size: "S" | "M" | "L";
  focus: boolean;
  hover: boolean;
  data: { title: string; content: string; children?: React.ReactNode }[];
}

const sizeStyle = {
  S: "h-8",
  M: "h-10",
  L: "h-12",
};

const stateStyle = {
  inText: {
    Enabled: "text-text-primary",
    Disabled: "text-text-disabled",
  },
  iconColor: {
    Enabled: "fill-icon-primary",
    Disabled: "fill-icon-disabled",
  },
};

export default function Accordion({
  state,
  size,
  data,
  focus,
  hover,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean[]>(
    new Array(data.length).fill(false),
  );

  const handleToggle = (index: number) => {
    if (state !== "Disabled") {
      const newIsOpen = [...isOpen];
      newIsOpen[index] = !newIsOpen[index];
      setIsOpen(newIsOpen);
    }
  };

  return (
    <FlexBox direction="col" className="w-full justify-between">
      {data.map((item, index) => (
        <div key={index} className="w-[400px] bg-layer-transparent">
          <div
            className={`flex flex-row justify-between w-full bg-layer-transparent
                            ${hover ? "hover:bg-layer-01-hover" : ""} ${
              focus ? "focus:border-border-strong-selected-01" : ""
            } ${sizeStyle[size]}`}
            onClick={() => handleToggle(index)}
          >
            <span
              className={`label-02-regular m-spacing-04 ${stateStyle.inText[state]}`}
            >
              {item.title}
            </span>
            <Icon
              icon={
                isOpen[index] ? "chevron_up_outlined" : "chevron_down_outlined"
              }
              size={24}
              className={`my-spacing-03 mr-spacing-04 ${stateStyle.iconColor[state]}`}
            />
          </div>
          {isOpen[index] && (
            <div
              className={`ml-spacing-04 mr-spacing-10 my-spacing-03 body-02-regular ${stateStyle.inText[state]}`}
            >
              {item.content}
              {item.children && item.children}
            </div>
          )}
          {index !== data.length - 1 && (
            <Divider type={"Horizontal"} height={1} />
          )}
        </div>
      ))}
    </FlexBox>
  );
}
