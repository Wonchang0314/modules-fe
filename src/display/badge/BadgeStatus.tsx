import { BadgeStateType } from "./Badge";

export interface BadgestatusProps {
  style: "dot" | "text";
  text?: string;
  state: BadgeStateType;
}

const textStyle = {
  success: "text-support-success",
  warning: "text-support-warning",
  error: "text-support-error",
  processing: "text-support-info",
};

const bgStyle = {
  success: "bg-support-success",
  warning: "bg-support-warning",
  error: "bg-support-error",
  processing: "bg-support-info",
};

export default function BadgeStatus({
  style,
  text = "",
  state,
}: BadgestatusProps) {
  return (
    <div className="flex gap-2 items-center">
      <div className={`w-2 h-2 rounded-full ${bgStyle[state]}`} />
      {style === "text" && text.length > 0 && (
        <div className={`label-02-regular ${textStyle[state]}`}>{text}</div>
      )}
    </div>
  );
}
