//애니메이션 정의 필요

export interface ScrimProps {
  className?: string;
}

export default function Scrim({ className }: ScrimProps) {
  return (
    <div
      className={`bg-overlay-default w-screen h-screen
                ${className}`}
    />
  );
}
