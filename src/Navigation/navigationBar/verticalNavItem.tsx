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
      className={`w-full h-full flex flex-col gap-spacing-04 justify-center items-center ${
        isFocused
          ? "bg-button-primary text-text-on-color-hover"
          : "bg-button-border text-text-disabled"
      }`}
      onClick={onClick}
    >
      <div>{name}</div>
      {count !== undefined && (
        <div
          className={`rounded-radius-circle py-spacing-02 px-spacing-04 ${
            isFocused
              ? "bg-support-info text-background"
              : "bg-icon-disabled text-text-disabled"
          }`}
        >
          {count}
        </div>
      )}
    </div>
  );
}
