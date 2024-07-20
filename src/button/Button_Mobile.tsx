import React, { useEffect, useState } from "react";
import Divider from "src/divider/Divider";

export interface ButtonProps {
  size: "L" | "M" | "S";
  style:
    | "primary"
    | "secondary"
    | "border"
    | "ghost"
    | "danger_primary"
    | "danger_border"
    | "danger_ghost"
    | "elevated_primiary";
  type: "text-icon" | "icon" | "text" | "text-text";
  state: "enabled" | "hover" | "active" | "disabled";
  leftIcon: boolean;
  round: boolean;
  text1: string;
  text2: string;
  onClick?: () => void;
}

export const buttonSize = {
  L: "min-w-[64px] max-w-[343px] h-[64px] pt-spacing-05 pr-spacing-07 pb-spacing-05 pl-spacing-07 gap-spacing-04",
  M: "min-w-[64px] max-w-[343px] h-[40px] pt-3 pr-spacing-04 pb-3 pl-spacing-04 gap-spacing-01",
  S: "min-w-[64px] max-w-[343px] h-[32px]",
};

export const buttonLabel = {
  L: "label-03-bold",
  M: "label-02-bold",
  S: "label-02-bold",
};

export const buttonStyle = {
  primary: {
    enabled: "bg-button-primary text-text-on-color",
    hover: "bg-button-primary-hover text-text-on-color",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-strong-01 bg-button-primary-active text-text-on-color",
  },
  secondary: {
    enabled: "bg-button-secondary text-text-secondary",
    hover: "bg-button-secondary-hover text-text-secondary",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active: "border border-strong-01 bg-button-secondary text-text-secondary",
  },
  danger_primary: {
    enabled: "bg-button-danger text-text-on-color",
    hover: "bg-button-danger-hover text-text-on-color hover",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active: "border border-strong-01 bg-button-danger text-text-on-color",
  },
  danger_border: {
    enabled: "border border-button-danger text-text-error",
    hover:
      "border border-strong-selected-01 bg-button-danger-hover text-text-on-color-hover",
    disabled: "border border-disabled text-text-disabled",
    active:
      "border border-strong-selected-01 bg-button-danger text-text-on-color",
  },
  danger_ghost: {
    enabled: "text-text-error",
    hover: "bg-background-hover text-text-error",
    disabled: "text-text-disabled",
    active: "border border-border-error text-text-error",
  },
  border: {
    enabled: "border border-button-border text-text-secondary",
    hover:
      "border border-button-border-hover bg-button-primary-hover text-text-on-color-hover",
    disabled: "border border-border-disabled text-text-disabled",
    active:
      "border border-strong-selected-01 bg-button-primary text-text-on-color",
  },

  ghost: {
    enabled: "text-text-primary",
    hover: "bg-Gray-50",
    disabled: "text-text-disabled",
    active: "border border-Gray-90",
  },

  elevated_primiary: {
    enabled: "bg-button-primary text-text-on-color",
    hover: "bg-button-primary-hover text-text-on-color",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active: "bg-button-primary text-text-on-color",
  },
};

export default function Button({
  size = "L",
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

  const sizeClass = buttonSize[size];
  const labelClass = buttonLabel[size];
  const styleClass = buttonStyle[style][buttonState];
  const roundClass = round ? "rounded-radius-circle" : "rounded-radius-04";

  return (
    <button
      className={`button flex items-center ${labelClass} ${sizeClass} ${styleClass} ${roundClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
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
