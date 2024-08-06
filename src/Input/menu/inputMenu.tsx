import { ReactElement } from "react";
import { FlexBox } from "src/layout";
import { MenuItemProps } from "./menuItem";

export interface InputMenuProps {
  size: "L" | "M";
  menuItem: ReactElement<MenuItemProps>[];
  className?: string;
}

const InputMenuSize = {
  simple: {
    L: "w-40 max-h-[392px]",
    M: "w-40 max-h-[328px]",
  },
  complex: {
    L: "w-40 max-h-[424px]",
    M: "w-40 max-h-[360px]",
  },
};

export default function InputMenu({
  size,
  className,
  menuItem,
}: InputMenuProps) {
  const menuSize =
    menuItem.length > 0 && menuItem[0].props.type === "default"
      ? "simple"
      : "complex";
  const sizeClass = InputMenuSize[menuSize][size];

  return (
    <FlexBox
      direction="col"
      className={`bg-layer-01 rounded-radius-04 pt-spacing-01 pr-0 pb-spacing-01 pl-0 shadow-elevation-light-2 overflow-scroll ${sizeClass} ${className}`}
    >
      {menuItem}
    </FlexBox>
  );
}
