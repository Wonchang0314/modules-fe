import { FlexBox } from "src/layout";
import Icon from "src/icon/Icon";

export interface MenuItemProps {
  size: "L" | "M";
  state: "enabled" | "hover" | "error" | "disabled";
  style: "simple" | "complex";
  type: "default" | "icon-left" | "icon-right";
  text?: string;
  className?: string;
}

const MenuItemState = {
  enabled: "bg-layer-01 text-text-primary",
  hover: "bg-layer-01-hover text-text-primary",
  error: "bg-support-error text-text-on-color",
  disabled: "bg-layer-01 text-text-disabled",
};

const IconColors = {
  enabled: "text-primary",
  hover: "text-primary",
  error: "text-on-color",
  disabled: "text-disabled",
};

const MenuItemStyle = {
  simple: {
    L: "w-40 max-h-12 p-spacing-04 gap-spacing-02",
    M: "w-40 max-h-10 pt-spacing-03 pr-spacing-04 pb-spacing-03 pl-spacing-04 gap-spacing-02",
  },
  complex: {
    L: "w-40 max-h-[52px] p-spacing-04 gap-spacing-02",
    M: "w-40 max-h-[44px] pt-spacing-03 pr-spacing-04 pb-spacing-03 pl-spacing-04 gap-spacing-02",
  },
};

export default function MenuItem({
  size,
  state,
  style,
  type,
  text = "Menu Item",
  className,
}: MenuItemProps) {
  const stateClass = MenuItemState[state];
  const styleClass = MenuItemStyle[style][size];
  const IconClass = IconColors[state];
  const iconRightDisplay = type === "icon-right" ? "justify-between" : "";

  return (
    <FlexBox
      direction="row"
      className={`flex ${iconRightDisplay} ${stateClass} ${styleClass} ${className}`}
    >
      {type === "icon-left" && (
        <Icon icon="fruit_apple" size={20} className={`fill-${IconClass}`} />
      )}
      <p>{text}</p>
      {type === "icon-right" && (
        <Icon icon="fruit_apple" size={20} className={`fill-${IconClass}`} />
      )}
    </FlexBox>
  );
}
