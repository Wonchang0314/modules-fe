export interface ProgressBarProps {
  size: "S" | "L";
  value: number;
  state?: "success" | "error";
  label?: string;
}

const bgStyle = {
  success: "bg-support-success",
  error: "bg-border-error",
};

export default function ProgressBar({
  size,
  value,
  state,
  label,
}: ProgressBarProps) {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      {label && (
        <div className="label-02-regular text-text-primary">{label}</div>
      )}
      <div
        className="flex relative items-center w-full rounded-full bg-border-subtle-01"
        style={{ height: size === "S" ? 4 : 8 }}
      >
        <div
          className={`absolute h-full top-0 left-0 bg-support-info rounded-full ${
            state ? bgStyle[state] : "bg-support-info"
          }`}
          style={{ width: `${state ? 100 : value}%` }}
        />
      </div>
    </div>
  );
}
