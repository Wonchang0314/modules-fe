//애니메이션 정의 필요
//focus 디자이너 보류

import FlexBox from "src/layout/FlexBox";
import { useState } from "react";
import Divider from "src/divider/Divider";
import Icon from "src/icon/Icon";

export interface AccordionProps {
  state: "Enabled" | "Disabled";
  size: "S" | "M" | "L";
  data: { title: string; content: string; children?: React.ReactNode }[];
}

const sizeStyle = {
  S: "h-8 py-spacing-01",
  M: "h-10 py-spacing-02",
  L: "h-12 py-spacing-03",
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

export default function Accordion({ state, size, data }: AccordionProps) {
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
              px-spacing-04 items-center
                            ${
                              state === "Enabled"
                                ? "hover:bg-layer-01-hover"
                                : ""
                            }  ${sizeStyle[size]}`}
            onClick={() => handleToggle(index)}
          >
            <div className={`label-02-regular ${stateStyle.inText[state]}`}>
              {item.title}
            </div>
            <Icon
              icon={
                isOpen[index] ? "chevron_up_outlined" : "chevron_down_outlined"
              }
              size={24}
              className={`ml-spacing-04 ${stateStyle.iconColor[state]}`}
            />
          </div>
          {isOpen[index] && (
            <FlexBox
              direction="col"
              className={`gap-spacing-04 ml-spacing-04 mr-spacing-10 my-spacing-03 body-02-regular ${stateStyle.inText[state]}`}
            >
              {item.content}
              {item.children && item.children}
            </FlexBox>
          )}
          {index !== data.length - 1 && (
            <Divider type={"Horizontal"} height={1} />
          )}
        </div>
      ))}
    </FlexBox>
  );
}
