import { iconKey, icons } from "src/icon/Icon";

type TopBarProps = {
  title?: string;
  leftIcon?: iconKey;
  leftText?: string;
  rightIcon?: iconKey;
  rightText?: string | iconKey;
  onClickLeftIcon?: () => void;
  onClickLeftText?: () => void;
  onClickRightIcon?: () => void;
  onClickRightText?: () => void;
  rightIconUnread?: boolean;
  /**
   * rightText=iconKey일 때만 표시
   */
  rightTextUnread?: boolean;
  iconSize?: number;
};
export default function TopBar({
  title,
  leftIcon,
  leftText,
  rightIcon,
  rightText,
  onClickLeftIcon,
  onClickLeftText,
  onClickRightIcon,
  onClickRightText,
  rightIconUnread = false,
  rightTextUnread = false,
  iconSize = 20,
}: TopBarProps) {
  let SVGLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
  let SVGRightIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined;

  if (leftIcon) SVGLeftIcon = icons[leftIcon];
  if (rightIcon) SVGRightIcon = icons[rightIcon];

  const returnRightText = () => {
    const keys = Object.keys(icons);
    type IconKey = (typeof keys)[number];

    const isIconKey = (x: any): x is IconKey => keys.includes(x);
    if (rightText === undefined) return;
    else if (isIconKey(rightText)) {
      const SVGRightIcon2: React.FC<React.SVGProps<SVGSVGElement>> =
        icons[rightText as iconKey];
      return (
        <div onClick={onClickRightText} className="relative">
          <SVGRightIcon2 width={iconSize} height={iconSize} />
          {rightTextUnread && (
            <div className="absolute top-0 right-0 w-2 h-2 bg-support-error rounded-radius-circle" />
          )}
        </div>
      );
    } else
      return (
        <div
          className="text-support-info label-02-medium"
          onClick={onClickRightText}
        >
          {rightText}
        </div>
      );
  };

  return (
    <div className="flex w-full h-8 bg-white justify-between items-center px-spacing-04 py-spacing-02 relative">
      <div className="flex items-center gap-spacing-05">
        {SVGLeftIcon && (
          <div onClick={onClickLeftIcon}>
            <SVGLeftIcon width={iconSize} height={iconSize} />
          </div>
        )}
        {leftText && (
          <div
            className="label-03-medium text-text-primary"
            onClick={onClickLeftText}
          >
            {leftText}
          </div>
        )}
      </div>
      <div className="label-03-medium text-text-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {title}
      </div>
      <div className="flex justify-end items-center gap-spacing-05 label-02-medium">
        {returnRightText()}
        {SVGRightIcon && (
          <div onClick={onClickRightIcon} className="relative">
            <SVGRightIcon width={iconSize} height={iconSize} />
            {rightIconUnread && (
              <div className="absolute top-0 right-0 w-2 h-2 bg-support-error rounded-full" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
