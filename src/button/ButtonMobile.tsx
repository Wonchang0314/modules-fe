import React, { useEffect, useState } from "react";
import Divider from "src/divider/Divider";

export interface ButtonPropsMobile {
  size: "L" | "M";
  style:
    | "primary"
    | "secondary"
    | "border"
    | "ghost"
    | "danger_primary"
    | "danger_border"
    | "danger_ghost"
    | "elevated_primiary";
  type: "text" | "text-text" | "icon" | "icon-left" | "icon-right";
  state: "enabled" | "active" | "disabled";
  round: boolean;
  text1: string;
  text2: string;
  onClick?: () => void;
}

export const buttonSize = {
  L: "min-w-[64px] max-w-[343px] h-[64px] pt-spacing-05 pr-spacing-07 pb-spacing-05 pl-spacing-07 gap-spacing-04",
  M: "min-w-[32px] max-w-[343px] h-[40px] pt-3 pr-spacing-04 pb-3 pl-spacing-04 gap-spacing-02",
};

export const buttonLabel = {
  L: "label-03-bold",
  M: "label-02-bold",
};

export const buttonStyleMobile = {
  primary: {
    enabled: "bg-button-primary text-text-on-color",
    hover: "bg-button-primary-hover text-text-on-color",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-border-strong-01 bg-button-primary-active text-text-on-color",
  },
  secondary: {
    enabled: "bg-button-secondary text-text-secondary",
    hover: "bg-button-secondary-hover text-text-secondary",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-border-strong-01 bg-button-secondary text-text-secondary",
  },
  danger_primary: {
    enabled: "bg-button-danger text-text-on-color",
    hover: "bg-button-danger-hover text-text-on-color hover",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-border-strong-01 bg-button-danger text-text-on-color",
  },
  danger_border: {
    enabled: "border border-button-danger text-text-error",
    hover:
      "border border-strong-selected-01 bg-button-danger-hover text-text-on-color-hover",
    disabled: "border border-disabled text-text-disabled",
    active:
      "border border-border-strong-selected-01 bg-button-danger text-text-on-color",
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
      "border border-border-strong-selected-01 bg-button-primary text-text-on-color",
  },

  ghost: {
    enabled: "text-text-primary",
    hover: "bg-text-Gray-50",
    disabled: "text-text-disabled",
    active: "border-2 border-Gray-90 text-text-primary",
  },

  elevated_primiary: {
    enabled: "bg-button-primary text-text-on-color shadow-elevation-light-1",
    hover:
      "bg-button-primary-hover text-text-on-color shadow-elevation-light-1",
    disabled:
      "bg-button-disabled text-text-on-color-disabled shadow-elevation-light-1",
    active: "bg-button-primary text-text-on-color shadow-elevation-light-1",
  },
};

const borderColors = {
  primary: {
    enabled: "#8D8D80",
    active: "#8D8D80",
    disabled: "#8D8D8D",
  },
  secondary: {
    enabled: "#8D8D8D",
    active: "#8D8D8D",
    disabled: "#8D8D8D",
  },
  border: {
    enabled: "#8D8D8D",
    active: "#8D8D8D",
    disabled: "#C6C6C6",
  },
  ghost: {
    enabled: "#8D8D8D",
    active: "#8D8D8D",
    disabled: "#C6C6C6",
  },
  danger_primary: {
    enabled: "#E0E0E0",
    active: "#E0E0E0",
    disabled: "#E0E0E0",
  },
  danger_border: {
    enabled: "#DA1E28",
    active: "#E0E0E0",
    disabled: "#C6C6C6",
  },
  danger_ghost: {
    enabled: "#E0E0E0",
    active: "#E0E0E0",
    disabled: "#C6C6C6",
  },
  elevated_primiary: {
    enabled: "#8D8D8D",
    active: "#8D8D8D",
    disabled: "#8D8D8D",
  },
};

export default function Button({
  size = "L",
  style = "primary",
  type = "text",
  state = "enabled",
  round = false,
  text1 = "Text1",
  text2 = "Text2",
  onClick,
}: ButtonPropsMobile) {
  const [buttonState, setButtonState] = useState(state);

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

  const sizeClass = buttonSize[size];
  const labelClass = buttonLabel[size];
  const styleClass = buttonStyleMobile[style][buttonState];
  const roundClass =
    style === "ghost" && buttonState === "active"
      ? ""
      : round
      ? "rounded-radius-circle"
      : "rounded-radius-04";
  const borderColor = borderColors[style][buttonState];

  return (
    <button
      className={`button flex ${labelClass} ${sizeClass} ${styleClass} ${roundClass}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
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
