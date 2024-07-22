import { BadgeStatusType } from "./Badge";

export interface BadgeCountProps {
  count: number;
  status: BadgeStatusType;
}

const bgStyle = {
  success: "bg-support-success",
  warning: "bg-support-warning",
  error: "bg-support-error",
  processing: "bg-support-info",
};

export default function BadgeCount({ count, status }: BadgeCountProps) {
  return (
    <div
      className={`flex px-2 py-1 items-center rounded-full ${bgStyle[status]}`}
    >
      <div className="label-01-regular text-text-on-color">{count}</div>
    </div>
  );
}
