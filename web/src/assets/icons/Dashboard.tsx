const Dashboard = ({
    width,
    height,
    color,
}: {
    width?: string;
    height?: string;
    color?: string;
}) => (
    <svg
        width={width ?? "19"}
        height={height ?? "18"}
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M18.168 18H10.168V12H18.168V18ZM8.16797 18H0.167969V8H8.16797V18ZM18.168 10H10.168V0H18.168V10ZM8.16797 6H0.167969V0H8.16797V6Z"
            fill={color ?? "#1A1A1A"}
        />
    </svg>
);

export default Dashboard;
