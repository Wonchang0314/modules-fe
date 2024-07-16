type VerticalNavItemProps = {
  name: string;
  count?: number;
  isFocused: boolean;
  onClick: () => void;
};

export default function VerticalNavItem({
  name,
  count,
  isFocused,
  onClick,
}: VerticalNavItemProps) {
  return (
    <div
      className={`w-full h-full flex flex-col gap-4 justify-center items-center ${
        isFocused
          ? "bg-[#131313] text-[#E9E9E9]"
          : "bg-[#A8A8A8] text-[#161616]/25"
        // isFocused ? "bg-button-primary text-on-color-hover" : "bg-button-border text-disabled"
      }`}
      onClick={onClick}
    >
      <div>{name}</div>
      <div
        className={`rounded-full py-2 px-4 ${
          isFocused
            ? "bg-[#0043CE] text-[#E9E9E9]"
            : "bg-[#161616]/25 text-[#161616]/25"
          // isFocused ? "bg-support-info text-background" : "bg-icon-disabled text-disabled"
        }`}
      >
        {count}
      </div>
    </div>
  );
}
