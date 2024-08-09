import Icon from "src/icon/Icon";

export interface SnackbarProps {
  open: boolean;
  message: string;
  lineMessage?: string;
  alert?: boolean;
  dismissible?: boolean;
  action?: string;
  actionOnClick?: () => void;
  onClose?: () => void;
}

// TODO : 애니메이션 정의 (Motion 사용)

export default function Snackbar({
  open,
  message,
  lineMessage,
  alert = false,
  dismissible = false,
  action,
  actionOnClick,
  onClose,
}: SnackbarProps) {
  return (
    open && (
      <div
        className={`flex flex-row px-spacing-05 py-spacing-03 bg-layer-inverse rounded-full w-full
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
    )
  );
}
