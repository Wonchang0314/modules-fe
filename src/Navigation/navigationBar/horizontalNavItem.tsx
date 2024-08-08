import Icon, { iconKey } from "src/icon/Icon";

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
  return (
    <div
      className="flex flex-col w-full pt-2.5 pb-spacing-08 gap-spacing-01 items-center justify-start"
      onClick={onClick}
    >
      <Icon
        icon={icon}
        size={24}
        className={`${isFocused ? "fill-icon-primary" : "fill-icon-secondary"}`}
      />
      <div
        className={`
          ${isFocused ? "text-text-primary label-01-bold" : "text-text-secondary label-01-medium"}`}
      >
        {name}
      </div>
    </div>
  );
}
