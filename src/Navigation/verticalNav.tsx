import { useState } from "react";
import VerticalNavItem from "./VerticalNavItem";

type VerticalNavProps = {
  items: { name: string; count?: number; onClick: () => void }[];
};

export default function VerticalNav({ items }: VerticalNavProps) {
  const [focusedIdx, setFocusedIdx] = useState<number>(0);

  const onClickItem = (i: number, onClick: () => void) => {
    setFocusedIdx(i);
    onClick();
  };

  return (
    <div className="w-full h-full flex flex-col divide-y divide-button-border divide-y-4">
      {items.map((item, i) => (
        // eslint-disable-next-line react/jsx-key
        <VerticalNavItem
          name={item.name}
          count={item.count}
          isFocused={i === focusedIdx}
          onClick={() => onClickItem(i, item.onClick)}
        />
      ))}
    </div>
  );
}
