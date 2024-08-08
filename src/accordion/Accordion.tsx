//애니메이션 정의 필요

import FlexBox from "src/layout/FlexBox";
import { useState } from "react";
import Divider from "src/divider/Divider";
import Icon from "src/icon/Icon";

export interface AccordionProps {
  state: "Enabled" | "Disabled";
  size: "S" | "M" | "L";
  title: string;
  children: React.ReactNode;
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

export default function Accordion({
  state,
  size,
  title,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    if (state !== "Disabled") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="w-[400px] bg-layer-transparent">
      <div
        className={`flex flex-row justify-between w-full
              px-spacing-04 items-center
                            ${
                              state === "Enabled"
                                ? "hover:bg-layer-01-hover"
                                : ""
                            }  ${sizeStyle[size]}`}
        onClick={() => handleToggle()}
      >
        <div className={`label-02-regular ${stateStyle.inText[state]}`}>
          {title}
        </div>
        <Icon
          icon={isOpen ? "chevron_up_outlined" : "chevron_down_outlined"}
          size={24}
          className={`ml-spacing-04 ${stateStyle.iconColor[state]}`}
        />
      </div>
      {isOpen && (
        <FlexBox
          direction="col"
          className={`gap-spacing-04 ml-spacing-04 mr-spacing-10 my-spacing-03 body-02-regular ${stateStyle.inText[state]}`}
        >
          {children}
        </FlexBox>
      )}
    </div>
  );
}
