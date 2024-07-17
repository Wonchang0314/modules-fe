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
};
export default function TopBar({
  title,
  leftIcon,
  leftText,
  rightIcon,
  rightText,
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
      return <SVGRightIcon2 width={20} height={20} />;
    } else
      return (
        <div className="text-[#0043CE] text-label-02-medium">
          {/* <div className="text-support-info text-label-02-medium"> */}
          {rightText}
        </div>
      );
  };

  return (
    <div className="flex w-full h-[32px] bg-[#FFF] justify-between items-center px-4 py-2">
      <div className="flex items-center gap-5">
        {SVGLeftIcon && <SVGLeftIcon width={20} height={20} />}
        {typeof leftText === "string" && (
          <div className="text-label-02-meidum text-[#161616]">{leftText}</div>
          // <div className="text-label-02-meidum text-primary">{leftText}</div>
        )}
      </div>
      <div className="text-labe-03-medium text-[#161616]">{title}</div>
      {/* <div className="text-labe-03-medium text-primary">{title}</div> */}
      <div className="flex justify-end items-center gap-5">
        {returnRightText()}
        {SVGRightIcon && <SVGRightIcon width={20} height={20} />}
      </div>
    </div>
  );
}
