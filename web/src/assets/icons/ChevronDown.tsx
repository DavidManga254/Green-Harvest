const ChevronDown = ({
    width,
    height,
    color,
}: {
    width?: string;
    height?: string;
    color?: string;
}) => (
    <svg
        width={width ?? "16"}
        height={height ?? "16"}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3.33329 5.66669L7.99996 10.3334L12.6666 5.66669"
            stroke={color ?? "white"}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export default ChevronDown;
