import { iconKey, icons } from "src/icon/Icon";

type TopBarProps = {
  title?: string;
  /**
   * type: iconKey
   */
  leftIcon?: iconKey;
  leftText?: string;
  /**
   * type: iconKey
   */
  rightIcon?: iconKey;
  /**
   * type: string | iconKey
   */
  rightText?: string | iconKey;
  onClickLeftIcon?: () => void;
  onClickLeftText?: () => void;
  onClickRightIcon?: () => void;
  onClickRightText?: () => void;
  /**
   * true일 때 안 읽음 표시
   */
  rightIconUnread?: boolean;
  /**
   * rightText=iconKey일 때만 표시
   */
  rightTextUnread?: boolean;
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
          <SVGRightIcon2 width={20} height={20} />
          {rightTextUnread && (
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#DA1E28] rounded-full" />
            /* <div className="absolute top-0 right-0 w-2 h-2 bg-support-error rounded-full" /> */
          )}
        </div>
      );
    } else
      return (
        <div
          className="text-[#0043CE] text-label-02-medium"
          onClick={onClickRightText}
        >
          {/* <div className="text-support-info text-label-02-medium"> */}
          {rightText}
        </div>
      );
  };

  return (
    <div className="flex w-full h-[32px] bg-[#FFF] justify-between items-center px-4 py-2">
      <div className="flex items-center gap-5">
        {SVGLeftIcon && (
          <div onClick={onClickLeftIcon}>
            <SVGLeftIcon width={20} height={20} />
          </div>
        )}
        {leftText && (
          <div
            className="text-label-02-meidum text-[#161616]"
            onClick={onClickLeftText}
          >
            {leftText}
          </div>
          // <div className="text-label-02-meidum text-primary">{leftText}</div>
        )}
      </div>
      <div className="text-labe-03-medium text-[#161616]">{title}</div>
      {/* <div className="text-labe-03-medium text-primary">{title}</div> */}
      <div className="flex justify-end items-center gap-5">
        {returnRightText()}
        {SVGRightIcon && (
          <div onClick={onClickRightIcon} className="relative">
            <SVGRightIcon width={20} height={20} />
            {rightIconUnread && (
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#DA1E28] rounded-full" />
            )}
            {/* <div className="absolute top-0 right-0 w-2 h-2 bg-support-error rounded-full" /> */}
          </div>
        )}
      </div>
    </div>
  );
}
