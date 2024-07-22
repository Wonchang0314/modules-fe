import Icon, { iconKey } from "src/icon/Icon";
import { BadgeStatusType } from "./Badge";

export interface BadgeIconProps {
  icon: iconKey;
  size?: number;
  status: BadgeStatusType;
}

const iconStyle = {
  success: "fill-support-success",
  warning: "fill-support-warning",
  error: "fill-support-error",
  processing: "fill-support-info",
};

export default function BadgeIcon({ icon, size = 24, status }: BadgeIconProps) {
  return <Icon icon={icon} size={size} className={`${iconStyle[status]}`} />;
}
