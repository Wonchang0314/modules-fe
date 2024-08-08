import { useState } from "react";
import Icon, { iconKey } from "src/icon/Icon";

export interface TabItemProps {
  icon?: iconKey;
  label?: string;
  dismissable?: boolean;
  onClick?: () => void;
  state: "Enabled" | "Disabled";
  isFocused?: boolean;
}

const stateStyles = {
  Enabled: {
    iconColor: "fill-icon-secondary group-hover:fill-icon-primary",
    classColor:
      "text-text-secondary hover:text-text-primary border-border-subtle-01 hover:border-border-strong-01",
  },
  Disabled: {
    iconColor: "fill-icon-disabled",
    classColor: "text-text-disabled border-border-disabeld",
  },
};

export default function Tab({
  icon,
  label,
  dismissable,
  state,
  onClick,
  isFocused,
}: TabItemProps) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  const StateStyle = stateStyles[state];

  return (
    visible && (
      <div
        className={`flex flex-row gap-spacing-02 items-center justify-center w-full
        border-b-2 border-border-stong-selected-01
        ${dismissable || icon ? "py-2.5" : "py-spacing-03"}
        ${label ? "px-spacing-03" : "px-2.5"}
        ${isFocused ? "text-text-primary border-border-strong-selected-01" : StateStyle.classColor}
        group`}
        onClick={onClick}
      >
        {icon && (
          <Icon
            icon={icon}
            size={20}
            className={`${isFocused ? "fill-icon-primary" : StateStyle.iconColor}`}
          />
        )}
        {label && <div className="label-02-regular">{label}</div>}
        {dismissable && (
          <button onClick={handleClose}>
            <Icon
              icon="close"
              size={20}
              className={`${isFocused ? "fill-icon-primary" : StateStyle.iconColor}`}
            />
          </button>
        )}
      </div>
    )
  );
}
