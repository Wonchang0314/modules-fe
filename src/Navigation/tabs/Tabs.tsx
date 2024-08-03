import { useState } from "react";
import { iconKey } from "src/icon/Icon";
import TabItem from "./TabItem";

export interface TabsProps {
  state: "Enabled" | "Disabled";
  items: {
    iconName?: iconKey;
    label?: string;
    dismissable?: boolean;
    onClick: () => void;
  }[];
}

export default function Tabs({ items, state }: TabsProps) {
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const onClickItem = (i: number, onClick: () => void) => {
    setFocusedIndex(i);
    onClick();
  };
  return (
    <div className="flex flex-row w-full min-w-[328px]">
      {items.map((item, i) => (
        <TabItem
          iconName={item.iconName}
          label={item.label}
          onClick={() => onClickItem(i, item.onClick)}
          state={state}
          dismissable={item.dismissable}
          isFocused={i === focusedIndex}
        />
      ))}
    </div>
  );
}
