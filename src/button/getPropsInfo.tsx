import { ButtonProps, buttonStyle } from "./Button_Mobile";

export const getStateInfo = (args: ButtonProps, styles: any) => {
  const style = args.style || "primary";
  return styles[style][args.state] || styles[style].enabled || "";
};

export const getPropsInfo = (args: ButtonProps, color: string) => {
  const style = args.style || "primary";
  const stateClass = buttonStyle[style][args.state] || "";
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
      <strong>Left Icon:</strong> {args.leftIcon ? "true" : "false"}
      <br />
      <strong>Text1:</strong> {args.text1}
      <br />
      <strong>Text2:</strong> {args.text2}
      <br />
      <strong>ClassName:</strong> {className}
    </div>
  );
};
