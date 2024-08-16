import { useEffect, useState } from "react";
import Divider from "src/Layout/Divider";
import Icon, { iconKey, icons } from "src/icon/Icon";

export interface ButtonPropsPC {
  style: "primary" | "secondary" | "border" | "ghost";
  type: "text" | "text-text" | "icon" | "icon-left" | "icon-right";
  state: "enabled" | "disabled";
  round: boolean;
  text1: string;
  text2?: string;
  iconKey?: iconKey;
  onClick?: () => void;
}

export const buttonStylePC = {
  primary: {
    enabled: "bg-button-primary text-text-on-color",
    hover: "bg-button-primary-hover text-text-on-color-hover",
    focus: "bg-button-primary-active text-text-on-color active",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-border-strong-01 bg-button-primary-active text-text-on-color m-[-1px]",
  },
  secondary: {
    enabled: "bg-button-secondary text-text-secondary",
    hover: "bg-button-secondary-hover text-text-secondary",
    focus: "bg-button-secondary-active text-text-secondary",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-border-strong-01 bg-button-secondary text-text-secondary m-[-1px]",
  },
  border: {
    enabled: "border border-button-border text-text-secondary m-[-1px]",
    hover:
      "border border-button-border-hover bg-button-primary-hover text-text-on-color-hover m-[-1px]",
    focus: "bg-button-primary-active text-text-on-color active",
    disabled: "border border-border-disabled text-text-disabled m-[-1px]",
    active:
      "border border-strong-selected-01 bg-button-primary text-text-on-color m-[-1px]",
  },
  ghost: {
    enabled: "text-text-primary",
    hover: "bg-Gray-Light text-text-primary",
    focus: "bg-Gray-Medium text-text-primary",
    disabled: "text-text-disabled",
    active: "border border-Gray-90 m-[-1px] text-text-primary",
  },
};

const buttonIconColors = {
  primary: {
    enabled: "fill-text-on-color",
    hover: "fill-text-on-color-hover",
    focus: "fill-text-on-color active",
    disabled: "fill-text-on-color-disabled",
    active: "fill-text-on-color",
  },
  secondary: {
    enabled: "fill-text-secondary",
    hover: "fill-text-secondary",
    focus: "fill-text-secondary",
    disabled: "fill-text-on-color-disabled",
    active: "fill-text-secondary",
  },
  border: {
    enabled: "fill-text-secondary",
    hover: "fill-text-on-color-hover",
    focus: "fill-text-on-color active",
    disabled: "fill-text-disabled",
    active: "fill-text-on-color",
  },
  ghost: {
    enabled: "fill-text-primary",
    hover: "fill-text-primary",
    focus: "fill-text-primary",
    disabled: "fill-text-disabled",
    active: "fill-text-primary",
  },
};

const dividerColors = {
  primary: {
    enabled: "Gray-50",
    active: "shrink-0 Gray-50",
    disabled: "Gray-50",
    hover: "Gray-50",
    focus: "Gray-50",
  },
  secondary: {
    enabled: "Gray-50",
    active: "shrink-0 Gray-50",
    disabled: "Gray-50",
    hover: "Gray-50",
    focus: "Gray-50",
  },
  border: {
    enabled: "shrink-0 Gray-50",
    active: "shrink-0 Gray-50",
    disabled: "shrink-0 Gray-30",
    hover: "shrink-0 Gray-50",
    focus: "shrink-0 Gray-50",
  },
  ghost: {
    enabled: "Gray-50",
    active: "shrink-0 Gray-50",
    disabled: "Gray-30",
    hover: "Gray-50",
    focus: "Gray-50",
  },
};

export default function Button({
  style = "primary",
  type = "text-text",
  state = "enabled",
  round = false,
  text1 = "Text1",
  text2 = "Text2",
  iconKey,
  onClick,
}: ButtonPropsPC) {
  const [isPressed, setIsPressed] = useState(false);
  const [buttonState, setButtonState] = useState(state);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setButtonState(state);
  }, [state]);

  const handleMouseDown = () => {
    if (state === "enabled") {
      setIsPressed(true); // 버튼이 눌렸을 때
    }
  };

  const handleMouseUp = () => {
    if (isPressed) {
      setIsPressed(false); // 마우스를 떼면 원래 상태로 복구
    }
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const styleClass = buttonStylePC[style][buttonState];
  const roundClass = round ? "rounded-radius-circle" : "rounded-radius-04";
  const dividerColor = dividerColors[style][buttonState];
  const hoverClass = hovered ? buttonStylePC[style]["hover"] : "";
  const focusClass = focused ? buttonStylePC[style]["focus"] : "";
  const buttonType =
    type === "icon"
      ? `p-spacing-05`
      : `pt-spacing-05 pr-spacing-08 pb-spacing-05 pl-spacing-08`;
  const iconColor = buttonIconColors[style][buttonState];

  return (
    <button
      className={`button flex items-center min-w-[64px] max-w-[1120px] h-[64px] 
        label-04-bold ${buttonType} gap-spacing-04 
        ${styleClass} ${roundClass} ${hoverClass} ${focusClass}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
      disabled={buttonState === "disabled"}
    >
      {type === "icon-left" && (
        <span className="left-icon">
          <Icon
            icon={iconKey as keyof typeof icons}
            className={`${iconColor}`}
          />
        </span>
      )}
      {type === "icon-left" && <span>{text1}</span>}
      {type === "icon-right" && <span>{text1}</span>}
      {type === "icon-right" && (
        <span className="right-icon">
          <Icon
            icon={iconKey as keyof typeof icons}
            className={`${iconColor}`}
          />
        </span>
      )}
      {type === "text" && <span>{text1}</span>}
      {type === "text-text" && <span>{text1}</span>}
      {type === "text-text" && (
        <Divider
          type="Vertical"
          size={16}
          subheader="|"
          className={dividerColor}
        />
      )}
      {type === "text-text" && <span>{text2}</span>}
      {type === "icon" && (
        <span className="icon">
          <Icon
            icon={iconKey as keyof typeof icons}
            className={`${iconColor}`}
          />
        </span>
      )}
    </button>
  );
}
