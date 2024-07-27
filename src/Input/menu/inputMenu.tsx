import { useEffect, useState } from "react";
import MenuItem, { MenuItemProps } from "./menuItem";
import { FlexBox } from "src/layout";

export interface InputMenuProps {
  size: "L" | "M";
  style?: "simple" | "complex";
  items: MenuItemProps[];
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

export default function InputMenu({ size, items, className }: InputMenuProps) {
  const [menuItems, setMenuItems] = useState<MenuItemProps[]>(items);
  const [menuSize, setMenuSize] = useState<"simple" | "complex">("simple");

  useEffect(() => {
    setMenuItems(items);

    const hasComplexStyle = items.some(item => item.style === "complex");
    setMenuSize(hasComplexStyle ? "complex" : "simple");
  }, [items]);

  const sizeClass = InputMenuSize[menuSize][size];

  useEffect(() => {
    setMenuItems(menuItems);
  }, [menuItems]);

  return (
    <FlexBox
      direction="col"
      className={`bg-layer-01 rounded-radius-04 pt-spacing-01 pr-0 pb-spacing-01 pl-0 shadow-elevation-light-2 overflow-scroll ${sizeClass} ${className}`}
    >
      {menuItems &&
        menuItems.map((item, index) => (
          <MenuItem
            key={index}
            size={item.size}
            state={item.state}
            style={item.style}
            type={item.type}
            text={item.text}
            className={item.className}
          />
        ))}
    </FlexBox>
  );
}
