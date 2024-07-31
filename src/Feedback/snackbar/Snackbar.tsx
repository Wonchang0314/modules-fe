import { useState } from "react";
import Icon from "src/icon/Icon";

export interface SnackbarProps {
  message: string;
  lineMessage?: string;
  alert?: boolean;
  dismissible?: boolean;
  action?: boolean;
  actionText?: string;
  onClick?: () => void;
}

export default function Snackbar({
  message,
  lineMessage,
  alert = false,
  dismissible = false,
  action = false,
  actionText,
  onClick,
}: SnackbarProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        className={`flex flex-row px-spacing-05 py-spacing-03 justify-between bg-layer-inverse rounded-full
      ${action ? "w-[328px]" : ""}`}
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
            <div
              className="text-support-info-inverse body-01-bold-compact"
              onClick={onClick}
            >
              {actionText}
            </div>
          )}
          {dismissible && (
            <button
              onClick={handleClose}
              className={`flex ${action ? "ml-spacing-02" : "ml-spacing-04"}`}
            >
              <Icon icon={"close"} size={20} className="fill-icon-on-color" />
            </button>
          )}
        </div>
      </div>
    )
  );
}
