import HorizontalNavItem from "./HorizontalNavItem";
import { useState } from "react";
import { iconKey } from "src/icon/Icon";

type NavigationType = {
  items: {
    name?: string;
    icon: iconKey;
    onClick: () => void;
  }[];
};

export default function HorizontalNav({ items }: NavigationType) {
  const [focusedIdx, setFocusedIdx] = useState<number>(0);

  const onClickItem = (i: number, onClick: () => void) => {
    setFocusedIdx(i);
    onClick();
  };

  return (
    <div
      className={`flex px-spacing-04 gap-spacing-02 border-t border-t-border-tile-01 bg-white`}
    >
      {items.map((item, i) => (
        // eslint-disable-next-line react/jsx-key
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
