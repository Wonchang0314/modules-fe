import React, { useEffect, useState } from "react";
import Divider from "src/divider/Divider";

export interface ButtonPropsPC {
  style: "primary" | "secondary" | "border" | "ghost";
  type: "text" | "text-text" | "icon" | "icon-left" | "icon-right";
  state: "enabled" | "active" | "disabled";
  round: boolean;
  text1: string;
  text2: string;
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

const borderColors = {
  primary: {
    enabled: "#8D8D80",
    active: "#8D8D80",
    disabled: "#8D8D8D",
    hover: "#8D8D80",
    focus: "#8D8D80",
  },
  secondary: {
    enabled: "#8D8D80",
    active: "#8D8D80",
    disabled: "#8D8D8D",
    hover: "#8D8D80",
    focus: "#8D8D80",
  },
  border: {
    enabled: "#8D8D8D",
    active: "#8D8D8D",
    disabled: "#C6C6C6",
    hover: "#8D8D8D",
    focus: "#8D8D8D",
  },
  ghost: {
    enabled: "#8D8D8D",
    active: "#8D8D8D",
    disabled: "#C6C6C6",
    hover: "#8D8D8D",
    focus: "#8D8D8D",
  },
};

export default function Button({
  style = "primary",
  type = "text-text",
  state = "enabled",
  round = false,
  text1 = "Text1",
  text2 = "Text2",
  onClick,
}: ButtonPropsPC) {
  const [buttonState, setButtonState] = useState(state);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setButtonState(state);
  }, [state]);

  const handleMouseDown = () => {
    if (buttonState === "enabled") {
      setButtonState("active");
    }
  };

  const handleMouseUp = () => {
    if (buttonState === "active") {
      setButtonState("enabled");
    }
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const styleClass = buttonStylePC[style][buttonState];
  const roundClass = round ? "rounded-radius-circle" : "rounded-radius-04";
  const borderColor = borderColors[style][buttonState];
  const hoverClass = hovered ? buttonStylePC[style]["hover"] : "";
  const focusClass = focused ? buttonStylePC[style]["focus"] : "";

  return (
    <button
      className={`button flex items-center min-w-[64px] max-w-[1120px] h-[64px] 
        label-04-bold pt-spacing-05 pr-spacing-08 pb-spacing-05 pl-spacing-08 gap-spacing-04 
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
      {type === "icon-left" && <span className="left-icon">+</span>}
      {type === "icon-left" && <span>{text1}</span>}
      {type === "icon-right" && <span>{text1}</span>}
      {type === "icon-right" && <span className="right-icon">+</span>}
      {type === "text" && <span>{text1}</span>}
      {type === "text-text" && <span>{text1}</span>}
      {type === "text-text" && (
        <Divider
          type="Vertical"
          height={16}
          subheader="|"
          borderColor={borderColor}
        />
      )}
      {type === "text-text" && <span>{text2}</span>}
      {type === "icon" && <span className="icon">+</span>}
    </button>
  );
}
