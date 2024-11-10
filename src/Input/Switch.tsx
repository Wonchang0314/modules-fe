import { useState } from "react";
import { InputStateType } from "src/Input/type";

export interface SwitchProps {
  state: Exclude<InputStateType, "error" | "warning">;
  title?: string;
  label?: string;
  onClick?: () => void;
}

const stateStyles = (isOn: boolean) => ({
  enable: {
    iconColor: "bg-icon-on-color",
    bgColor: isOn ? "bg-support-info" : "bg-button-disabled",
  },
  disabled: {
    iconColor: "bg-icon-on-color-disabled",
    bgColor: "bg-button-disabled",
  },
  readOnly: {
    iconColor: "bg-icon-primary",
    bgColor: "bg-layer-transparent",
  },
});

export default function Switch({ state, title, label, onClick }: SwitchProps) {
  const [isOn, setIsOn] = useState(false);

  const stateStyle = stateStyles(isOn)[state];

  const labelColor =
    state === "disabled" ? "text-text-disabled" : "text-text-secondary";

  const titleColor =
    state === "disabled" ? "text-text-disabled" : "text-text-primary";

  const toggleSwitch = () => {
    if (state == "enable") {
      setIsOn(!isOn);
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <>
      {label && (
        <div className={`pb-spacing-02 label-01-regular ${labelColor}`}>
          {label}
        </div>
      )}
      <div className="flex gap-spacing-02">
        <div
          className={`w-12 h-6 rounded-full
            ${stateStyle.bgColor} ${
              state === "readOnly"
                ? "border border-border-subtle-01 py-[2px]"
                : "py-[3px]"
            }`}
          onClick={toggleSwitch}
        >
          <div
            className={`w-[18px] h-[18px] rounded-full ${stateStyle.iconColor} 
                transform transition-transform duration-250 ${
                  isOn ? "translate-x-[27px]" : "translate-x-[3px]"
                }`}
          />
        </div>
        {title && (
          <div className={`flex items-center body-02-regular ${titleColor}`}>
            {title}
          </div>
        )}
      </div>
    </>
  );
}
