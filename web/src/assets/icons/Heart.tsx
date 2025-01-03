const Heart = ({
    width,
    height,
    color,
}: {
    width?: string;
    height?: string;
    color?: string;
}) => (
    <svg
        width={width ?? "32"}
        height={height ?? "33"}
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M15.9995 28.5722C-10.6667 13.8333 7.99999 -2.16668 15.9995 7.95072C24 -2.16669 42.6666 13.8333 15.9995 28.5722Z"
            stroke={color ?? "#1A1A1A"}
            stroke-width="1.5"
        />
    </svg>
);

export default Heart;
