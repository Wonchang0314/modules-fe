export interface ScrimProps {
    opacity: number;
    className?: string;
}

export default function Scrim({ opacity = 50, className }: ScrimProps) {
    return (
        <div
            className={`bg-black w-full h-full duration-150 animate-tranquillo-default
                ${className}`}
            style={{ opacity: opacity }}
        />
    );
}

//bg-overlay
