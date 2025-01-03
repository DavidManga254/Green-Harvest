const Minus = ({
    width,
    height,
    color,
}: {
    width?: string;
    height?: string;
    color?: string;
}) => (
    <svg
        width={width ?? "14"}
        height={height ?? "14"}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M2.33398 7H11.6673"
            stroke={color ?? "#666666"}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export default Minus;
