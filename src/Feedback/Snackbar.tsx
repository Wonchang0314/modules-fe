import { useEffect, useState } from "react";
import Icon from "src/icon/Icon";

export interface SnackBarProps {
  open: boolean;
  message: string;
  lineMessage?: string;
  alert?: boolean;
  dismissible?: boolean;
  action?: string;
  actionOnClick?: () => void;
  onClose?: () => void;
}

export default function SnackBar({
  open,
  message,
  lineMessage,
  alert = false,
  dismissible = false,
  action,
  actionOnClick,
  onClose,
}: SnackBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    let showTimeout: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;

    if (open) {
      setShouldRender(true);
      showTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 10);

      hideTimeout = setTimeout(() => {
        setIsVisible(false);
        if (onClose) {
          onClose(); // onClose에서 open을 false로 변경
        }
      }, 1500);
    } else {
      setIsVisible(false);
      hideTimeout = setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [open]);

  if (!shouldRender) return null;

  return (
    <div
      className={`flex flex-row px-spacing-05 py-spacing-03 bg-layer-inverse rounded-full w-full
          transition-opacity
          ${
            isVisible
              ? "opacity-100 duration-duration-07 ease-tranquillo-default"
              : "opacity-0 duration-duration-05 ease-tranquillo-exit"
          }
          ${!alert && !action && !dismissible ? "justify-center text-center" : "justify-between"}`}
    >
      <div className="flex flex-row items-center">
        {alert && (
          <Icon
            icon={"warning_triangle_filled"}
            className="fill-support-warning mr-spacing-02"
            size={20}
          />
        )}
        <span className="text-text-on-color body-01-medium">
          {message}
          {lineMessage && (
            <>
              <br />
              {lineMessage}
            </>
          )}
        </span>
      </div>
      <div className="flex flex-row items-center">
        {action && (
          <button
            className="text-support-info-inverse body-01-bold-compact"
            onClick={actionOnClick}
          >
            {action}
          </button>
        )}
        {dismissible && (
          <button
            onClick={onClose}
            className={`flex ${action ? "ml-spacing-02" : "ml-spacing-04"}`}
          >
            <Icon icon={"close"} size={20} className="fill-icon-on-color" />
          </button>
        )}
      </div>
    </div>
  );
}
