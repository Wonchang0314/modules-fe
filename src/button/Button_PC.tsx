import React, { useEffect, useState } from "react";
import Divider from "src/divider/Divider";

export interface ButtonProps {
  style: "primary" | "secondary" | "border" | "ghost";
  type: "text-icon" | "icon" | "text" | "text-text";
  state: "enabled" | "hover" | "focus" | "active" | "disabled";
  leftIcon: boolean;
  round: boolean;
  text1: string;
  text2: string;
  onClick?: () => void;
}

export const buttonStyle = {
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

export default function Button({
  style = "primary",
  type = "text-text",
  state = "enabled",
  leftIcon = false,
  round = false,
  text1 = "Text1",
  text2 = "Text2",
  onClick,
}: ButtonProps) {
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

  const styleClass = buttonStyle[style][buttonState];
  const roundClass = round ? "rounded-radius-circle" : "rounded-radius-04";

  return (
    <button
      className={`button flex justify-between min-w-[64px] max-w-[1120px] h-[64px] label-04-bold pt-spacing-05 pr-spacing-08 pb-spacing-05 pl-spacing-08 gap-spacing-04 ${styleClass} ${roundClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
      disabled={buttonState === "disabled"}
    >
      {leftIcon && <span className="left-icon">+</span>}
      {text1}

      {type === "text-text" && (
        <Divider type="Vertical" height={16} subheader="|" />
      )}

      {type === "text-text" && text2 && <p>{text2}</p>}
    </button>
  );
}
