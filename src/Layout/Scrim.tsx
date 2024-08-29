export interface ScrimProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Scrim({
  className,
  children,
  ...props
}: ScrimProps & JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      className={`bg-overlay-default w-screen h-screen ${className}`}
    >
      {children}
    </div>
  );
}
