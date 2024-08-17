import Icon, { iconKey, icons } from "src/icon/Icon";
import { InputStateType } from "src/Input/type";

export interface MenuItemProps {
  size: "L" | "M";
  state: Exclude<InputStateType, "warning" | "readOnly">;
  type: "default" | "icon-left" | "icon-right";
  text?: string;
  iconKey?: iconKey;
  className?: string;
}

const MenuItemState = {
  enable: "bg-layer-01 text-text-primary",
  error: "bg-support-error text-text-on-color",
  disabled: "bg-layer-01 text-text-disabled cursor-not-allowed",
};

const IconColors = {
  enable: "text-primary",
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
  type,
  text = "Menu Item",
  iconKey,
  className,
}: MenuItemProps) {
  const menuType = type === "default" ? "simple" : "complex";
  const stateClass = MenuItemState[state];
  const styleClass = MenuItemStyle[menuType][size];
  const IconClass = IconColors[state];
  const iconRightDisplay = type === "icon-right" ? "justify-between" : "";

  return (
    <div
      className={`flex flex-row items-center ${iconRightDisplay} ${stateClass} ${styleClass} ${className} hover:bg-layer-01-hover hover:text-text-primary cursor-pointer`}
    >
      {type === "icon-left" && (
        <Icon
          icon={iconKey as keyof typeof icons}
          size={20}
          className={`fill-${IconClass}`}
        />
      )}
      <p>{text}</p>
      {type === "icon-right" && (
        <Icon
          icon={iconKey as keyof typeof icons}
          size={20}
          className={`fill-${IconClass}`}
        />
      )}
    </div>
  );
}
