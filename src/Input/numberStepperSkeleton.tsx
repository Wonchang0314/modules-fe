import MinusIcon from "../../icon/svg/navigation/subtract.svg";
import PlusIcon from "../../icon/svg/navigation/add.svg";

const widthStyle = {
  short: {
    S: "w-[90px]",
    M: "w-[95px]",
  },
  long: {
    S: "w-full",
    M: "w-full",
  },
};

const sizeStyle = {
  S: {
    padding: "p-1.5",
  },
  M: {
    padding: "p-spacing-02",
  },
};

type NumberStepperSkeletonProps = {
  width: "short" | "long";
  size: "S" | "M";
};

export default function NumberStepperSkeleton({
  width,
  size,
}: NumberStepperSkeletonProps) {
  return (
    <div
      className={`
      bg-[#E0E0E0] w-full rounded-radius-03 flex items-center justify-between gap-spacing-02 border border-[#E0E0E0] 
      ${widthStyle[width][size]}
      ${sizeStyle[size]["padding"]} 
    `}
    >
      {/* <div
      className={`
      bg-skeleton-container w-full rounded-radius-03 flex items-center justify-between gap-spacing-02 border border-skeleton-container
      ${widthStyle[width][size]}
      ${sizeStyle[size]["padding"]} 
    `}
    > */}
      <div className="flex gap-spacing-02 items-center">
        <MinusIcon width={20} height={20} className="fill-icon-primary" />
        {width === "long" && (
          <div className="w-[1px] h-4 bg-[#C6C6C6] mr-spacing-02" />
          // <div className="w-[1px] h-4 bg-skeleton-element mr-spacing-02" />
        )}
      </div>
      <div className="w-full h-4 bg-skeleton-element" />
      <div className="flex gap-spacing-02 items-center">
        {width === "long" && (
          <div className="w-[1px] h-4 bg-[#C6C6C6] mr-spacing-02" />
          // <div className="w-[1px] h-4 bg-skeleton-element mr-spacing-02" />
        )}
        <PlusIcon width={20} height={20} className="fill-icon-primary" />
      </div>
    </div>
  );
}
