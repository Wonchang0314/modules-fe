import { useEffect, useRef, useState } from "react";
import Icon from "src/icon/Icon";
import { InputStateType } from "src/utils/type";

export interface AccordionProps {
  state: Exclude<InputStateType, "error" | "warning" | "readOnly">;
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
    enable: "text-text-primary",
    disabled: "text-text-disabled",
  },
  iconColor: {
    enable: "fill-icon-primary",
    disabled: "fill-icon-disabled",
  },
};

export default function Accordion({
  state,
  size,
  title,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (state !== "disabled") {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;

      if (isOpen) {
        contentRef.current.style.maxHeight = `${contentHeight}px`;
      } else {
        contentRef.current.style.maxHeight = "0px";
      }
    }
  }, [isOpen]);

  return (
    <div className="w-full bg-layer-transparent relative">
      <div
        className={`flex flex-row z-1 justify-between w-full px-spacing-04 items-center
        ${state === "enable" ? "hover:bg-layer-01-hover" : ""} ${sizeStyle[size]}`}
        onClick={() => handleToggle()}
      >
        <div className={`label-02-regular ${stateStyle.inText[state]}`}>
          {title}
        </div>
        <Icon
          icon={"chevron_down_outlined"}
          size={24}
          className={`absolute right-spacing-04 transition-opacity ${isOpen ? "opacity-0" : "opacity-100 duration-duration-03 tranquillo-enter"} ${stateStyle.iconColor[state]}`}
        />
        <Icon
          icon={"chevron_up_outlined"}
          size={24}
          className={`absolute right-spacing-04 transition-opacity ${isOpen ? "opacity-100 duration-duration-05 tranquillo-exit" : "opacity-0"} ${stateStyle.iconColor[state]}`}
        />
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-[max-height] ${isOpen ? "duration-duration-03 tranquillo-enter" : "duration-duration-05 tranquillo-exit"}`}
      >
        <div className="px-spacing-04 py-spacing-03 body-02-regular">
          {children}
        </div>
      </div>
    </div>
  );
}
