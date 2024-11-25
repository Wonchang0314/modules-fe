import Icon, { iconKey } from "src/icon/Icon";

export interface AvatarProps {
  input?: "text" | "icon" | "image";
  size?: "S" | "M" | "L" | "XL";
  backgroundColor?:
    | "in-gray"
    | "in-red"
    | "in-green"
    | "in-blue"
    | "in-cyan"
    | "in-magenta"
    | "in-purple"
    | "in-teal"
    | "out-red"
    | "out-red-2"
    | "out-orange"
    | "out-blue"
    | "out-cyan"
    | "out-purple";
  border?: boolean;
  /**
   * tailwind color token으로 작성해주세요.
   */
  borderColor?: string;
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
  S: "border border-2",
  M: "border border-2",
  L: "border border-4",
  XL: "border border-4",
};

const bgStyle = {
  "in-gray": "from-[#C6C6C6] to-[#393939]",
  //background: linear-gradient(180deg, #FF8389 0%, #A2191F 100%);
  "in-red": "from-[#FF8389] to-[#A2191F]",
  //background: linear-gradient(180deg, #6FDC8C 0%, #0E6027 100%);
  "in-green": "from-[#6FDC8C] to-[#0E6027]",
  //background: linear-gradient(180deg, #A6C8FF 0%, #0043CE 100%);
  "in-blue": "from-[#A6C8FF] to-[#0043CE]",
  //background: linear-gradient(180deg, #82CFFF 0%, #00539A 100%);
  "in-cyan": "from-[#82CFFF] to-[#00539A]",
  //  background: linear-gradient(180deg, #FFAFD2 0%, #D02670 100%);
  "in-magenta": "from-[#FFAFD2] to-[#D02670]",
  //background: linear-gradient(180deg, #D4BBFF 0%, #6929C4 100%);
  "in-purple": "from-[#D4BBFF] to-[#6929C4]",
  //background: linear-gradient(180deg, #3DDBD9 0%, #005D5D 100%);
  "in-teal": "from-[#3DDBD9] to-[#005D5D]",
  //background: linear-gradient(180deg, #FFB784 0%, #DA1E28 100%);
  "out-red": "from-[#FFB784] to-[#DA1E28]",
  //background: linear-gradient(180deg, #F1C21B 0%, #DA1E28 100%);
  "out-red-2": "from-[#F1C21B] to-[#DA1E28]",
  //background: linear-gradient(180deg, #FDDC69 0%, #EB6200 100%);
  "out-orange": "from-[#FDDC69] to-[#EB6200]",
  //background: linear-gradient(180deg, #82CFFF 0%, #0043CE 100%);
  "out-blue": "from-[#82CFFF] to-[#0043CE]",
  //background: linear-gradient(180deg, #3DDBD9 0%, #00539A 100%);
  "out-cyan": "from-[#3DDBD9] to-[#00539A]",
  //background: linear-gradient(180deg, #FFAFD2 0%, #8A3FFC 100%);
  "out-purple": "from-[#FFAFD2] to-[#8A3FFC]",
};

export default function Avatar({
  input = "text",
  size = "M",
  backgroundColor = "in-gray",
  border = false,
  text = "",
  icon = "account",
  image = "",
  borderColor = "[#262626]",
}: AvatarProps) {
  return (
    <div
      className={`flex justify-center items-center rounded-full relative ${
        border ? borderStyle[size] : ""
      } ${border ? `border-${borderColor}` : ""} 
      ${sizeStyle[size]} bg-gradient-to-b ${
        input !== "image" ? bgStyle[backgroundColor] : ""
      }
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
