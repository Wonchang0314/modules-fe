import { ButtonPropsMobile, buttonStyleMobile } from "./ButtonMobile";
import { ButtonPropsPC, buttonStylePC } from "./ButtonPC";

export const getMobileStateInfo = (args: ButtonPropsMobile, styles: any) => {
  const style = args.style || "primary";
  return styles[style][args.state] || styles[style].enabled || "";
};
export const getPcStateInfo = (args: ButtonPropsPC, styles: any) => {
  const style = args.style || "primary";
  return styles[style][args.state] || styles[style].enabled || "";
};

export const getPropsMobileInfo = (args: ButtonPropsMobile, color: string) => {
  const style = args.style || "primary";
  const stateClass = buttonStyleMobile[style][args.state] || "";
  const className = `${stateClass}`;

  return (
    <div style={{ marginTop: "16px" }}>
      <strong>Style:</strong> {args.style}
      {args.size && (
        <>
          <br />
          <strong>Size:</strong> {args.size}
        </>
      )}
      <br />
      <strong>State:</strong> {args.state}
      <br />
      <strong>Round:</strong> {args.round ? "true" : "false"}
      <br />
      <strong>Type:</strong> {args.type}
      <br />
      <strong>Text1:</strong> {args.text1}
      <br />
      <strong>Text2:</strong> {args.text2}
      <br />
      <strong>ClassName:</strong> {className}
    </div>
  );
};

export const getPropsPCInfo = (args: ButtonPropsPC, color: string) => {
  const style = args.style || "primary";
  const stateClass = buttonStylePC[style][args.state] || "";
  const className = `${stateClass}`;

  return (
    <div style={{ marginTop: "16px" }}>
      <strong>Style:</strong> {args.style}
      <br />
      <strong>State:</strong> {args.state}
      <br />
      <strong>Round:</strong> {args.round ? "true" : "false"}
      <br />
      <strong>Type:</strong> {args.type}
      <br />
      <strong>Text1:</strong> {args.text1}
      <br />
      <strong>Text2:</strong> {args.text2}
      <br />
      <strong>ClassName:</strong> {className}
    </div>
  );
};
