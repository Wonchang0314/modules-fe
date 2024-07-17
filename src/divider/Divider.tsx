export interface DividerProps {
    type: 'Horizontal' | 'Vertical';
    height?: number;
    subheader?: string;
}

export default function Divider({ type, height, subheader }: DividerProps) {
    return (
        <>
            <div
                className="bg-border-subtle-01"
                style={{ height: `${height}px`, width: `${type === 'Vertical' ? '1px' : ''}` }}
            />
            {type === 'Horizontal' && subheader && (
                <div className="mt-spacing-02 text-text-helper label-01-regular">{subheader}</div>
            )}
        </>
    );
}
