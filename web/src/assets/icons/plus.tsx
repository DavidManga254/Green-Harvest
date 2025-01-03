const Plus = ({
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
            d="M2.33398 6.99998H11.6673M7.00065 2.33331V11.6666V2.33331Z"
            stroke={color ?? "#1A1A1A"}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export default Plus;
