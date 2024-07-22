import Icon, { iconKey } from "src/icon/Icon";

export interface AvatarProps {
  input?: "text" | "icon" | "image";
  size: "S" | "M" | "L" | "XL";
  backgroundColor?: string;
  border?: boolean;
  text?: string;
  icon?: iconKey;
  image?: string;
}

const sizeStyle = {
  S: "w-12 h-12",
  M: "w-16 h-16",
  L: "w-20 h-20",
  XL: "w-24 h-24",
};

const iconSize = {
  S: 24,
  M: 32,
  L: 40,
  XL: 48,
};

const fontStyle = {
  S: "head-03-bold",
  M: "head-03-bold",
  L: "head-05-bold",
  XL: "head-05-bold",
};

const borderStyle = {
  S: "border border-2 border-[#262626]",
  M: "border border-2 border-[#262626]",
  L: "border border-4 border-[#262626]",
  XL: "border border-4 border-[#262626]",
};

export default function Avatar({
  input = "text",
  size = "M",
  border = false,
  text = "",
  icon = "account",
  image = "",
}: AvatarProps) {
  return (
    <div
      className={`flex justify-center items-center rounded-full relative ${
        border ? borderStyle[size] : ""
      } ${sizeStyle[size]} 
      bg-gradient-to-b from-[#C6C6C6] to-[#393939]
      `}
    >
      {input === "text" && <div className={fontStyle[size]}>{text?.[0]}</div>}
      {input === "icon" && (
        <Icon icon={icon} size={iconSize[size]} className="fill-white" />
      )}
      {input === "image" && (
        <img src={image} alt="avatar" className="w-full h-full rounded-full" />
      )}
    </div>
  );
}
