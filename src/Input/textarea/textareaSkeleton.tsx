type SkeletonType = {
  size: "S" | "M" | "L";
  label: boolean;
};

const boxStyle = {
  S: {
    label: "w-[29px] h-[14px]",
    input: "h-[54px]",
    description: "w-[57px] h-[14px]",
  },
  M: {
    label: "w-[29px] h-[16px]",
    input: "h-[64px]",
    description: "w-[57px] h-[16px]",
  },
  L: {
    label: "w-[29px] h-[16px]",
    input: "h-[82px]",
    description: "w-[57px] h-[16px]",
  },
};

export default function TextAreaSkeleton({ size, label }: SkeletonType) {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <div
          className={`
            bg-[#d9d9d9] pl-4
            ${boxStyle[size]["label"]}
          `}
        />
      )}
      <div
        className={`bg-[#d9d9d9] rounded-lg w-full ${boxStyle[size]["input"]}`}
      />
      <div
        className={`
          bg-[#d9d9d9] pl-4
          ${boxStyle[size]["description"]}
        `}
      />
    </div>
  );
}
