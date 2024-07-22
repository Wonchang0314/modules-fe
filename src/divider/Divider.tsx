export interface DividerProps {
  type: "Horizontal" | "Vertical";
  height?: number;
  subheader?: string;
  borderColor: string;
}

export default function Divider({
  type,
  height,
  subheader,
  borderColor,
}: DividerProps) {
  return (
    <>
      <div
        className="bg-border-subtle-01"
        style={{
          backgroundColor: borderColor,
          height: `${height}px`,
          width: `${type === "Vertical" ? "1px" : ""}`,
        }}
      />
      {type === "Horizontal" && subheader && (
        <div className="mt-spacing-02 text-text-helper label-01-regular">
          {subheader}
        </div>
      )}
    </>
  );
}
