import React, { useEffect, useState } from "react";
import Divider from "src/divider/Divider";

export interface ButtonPropsPC {
  style: "primary" | "secondary" | "border" | "ghost";
  type: "text" | "text-text" | "icon" | "icon-left" | "icon-right";
  state: "enabled" | "hover" | "focus" | "active" | "disabled";
  round: boolean;
  text1: string;
  text2: string;
  onClick?: () => void;
}

export const buttonStylePC = {
  primary: {
    enabled: "bg-button-primary text-text-on-color",
    hover: "bg-button-primary-hover text-text-on-color",
    focus: "bg-button-primary-active text-text-on-color active",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-strong-01 bg-button-primary-active text-text-on-color",
  },
  secondary: {
    enabled: "bg-button-secondary text-text-secondary",
    hover: "bg-button-secondary-hover text-text-secondary",
    focus: "bg-button-secondary-active text-text-secondary",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active: "border border-strong-01 bg-button-secondary text-text-secondary",
  },
  border: {
    enabled: "border border-button-border text-text-secondary",
    hover:
      "border border-button-border-hover bg-button-primary-hover text-text-on-color-hover",
    focus: "bg-button-primary-active text-text-on-color active",
    disabled: "border border-border-disabled text-text-disabled",
    active:
      "border border-strong-selected-01 bg-button-primary text-text-on-color",
  },
  ghost: {
    enabled: "text-text-primary",
    hover: "bg-Gray-50",
    focus: "bg-Gray-50 text-text-primary",
    disabled: "text-text-disabled",
    active: "border border-Gray-90",
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

  useEffect(() => {
    setButtonState(state);
  }, [state]);

  const handleMouseEnter = () => {
    if (buttonState === "enabled") {
      setButtonState("hover");
    }
  };

  const handleMouseLeave = () => {
    if (buttonState === "hover") {
      setButtonState("enabled");
    }
  };

  const handleMouseDown = () => {
    if (buttonState === "hover" || buttonState === "enabled") {
      setButtonState("active");
    }
  };

  const handleMouseUp = () => {
    if (buttonState === "active") {
      setButtonState("enabled");
    }
  };

  const handleFocus = () => {
    if (buttonState === "enabled") {
      setButtonState("focus");
    }
  };

  const handleBlur = () => {
    if (buttonState === "focus") {
      setButtonState("enabled");
    }
  };

  const styleClass = buttonStylePC[style][buttonState];
  const roundClass = round ? "rounded-radius-circle" : "rounded-radius-04";
  const borderColor = borderColors[style][buttonState];

  return (
    <button
      className={`button flex min-w-[64px] max-w-[1120px] h-[64px] label-04-bold pt-spacing-05 pr-spacing-08 pb-spacing-05 pl-spacing-08 gap-spacing-04 ${styleClass} ${roundClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
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
