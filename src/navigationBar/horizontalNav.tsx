import Image from "next/image";
import HorizontalNavItem from "./horizontalNavItem";
import { useState } from "react";
import { iconKey } from "src/icon/Icon";

type itemProps = {
  name?: string;
  icon: iconKey;
  onClick: () => void;
};

type NavigationType = {
  /**
   * itemProps = icon, onClick, name(Optional)
   */
  items: itemProps[];
};

export default function HorizontalNav({ items }: NavigationType) {
  const [focusedIdx, setFocusedIdx] = useState<number>(0);

  const onClickItem = (i: number, onClick: () => void) => {
    setFocusedIdx(i);
    onClick();
  };

  return (
    <div className={`flex px-4 gap-2 border-t border-t-[#E0E0E0] bg-[#FFF]`}>
      {items.map((item, i) => (
        <HorizontalNavItem
          name={item.name}
          icon={item.icon}
          onClick={() => onClickItem(i, item.onClick)}
          isFocused={i === focusedIdx}
        />
      ))}
    </div>
  );
}
