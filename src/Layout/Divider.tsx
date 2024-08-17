export interface DividerProps {
  type: "Horizontal" | "Vertical";
  size?: number;
  subHeader?: string;
  className?: string;
}

/**
 * 색상은 classname 에서 bg-{color token} 으로 지정해주세요.
 * type = Vertical 은 subheader을 지정할 수 없습니다.
 */

export default function Divider({
  type,
  size,
  subHeader,
  className,
}: DividerProps) {
  const style = size
    ? {
        height: type === "Horizontal" ? "1px" : `${size}px`,
        width: type === "Vertical" ? "1px" : `${size}px`,
      }
    : {};

  return (
    <>
      <div
        className={`${className} ${
          className?.includes("bg-") ? "" : "bg-border-subtle-01"
        }`}
        style={style}
      />
      {type === "Horizontal" && subHeader && (
        <div className="mt-spacing-02 text-text-helper label-01-regular">
          {subHeader}
        </div>
      )}
    </>
  );
}
