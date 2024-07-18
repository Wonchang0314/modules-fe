import Image from "next/image";
import { iconKey, icons } from "src/icon/Icon";

type HorizontalNavItemProps = {
  name?: string;
  icon: iconKey;
  onClick: () => void;
  isFocused: boolean;
};

export default function HorizontalNavItem({
  name,
  icon,
  onClick,
  isFocused,
}: HorizontalNavItemProps) {
  const SVGIcon = icons[icon];

  return (
    <div
      className="flex flex-col w-full pt-2.5 pb-spacing-08 gap-spacing-01 items-center justify-start"
      onClick={onClick}
    >
      <SVGIcon
        width={24}
        height={24}
        color={isFocused ? "#262626" : "#6F6F6F"}
      />
      <div
        className={`
          text-label-01-medium 
          ${
            isFocused ? "text-[#161616]" : "text-[#6f6f6f]"
            //isFocused ? "text-primary" : "text-secondary"
          }`}
      >
        {name}
      </div>
    </div>
  );
}
