const MapPin = ({ width, height }: { width?: string; height?: string }) => (
    <svg
        width={width ?? "17"}
        height={height ?? "20"}
        viewBox="0 0 17 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16 8.36364C16 14.0909 8.5 19 8.5 19C8.5 19 1 14.0909 1 8.36364C1 6.41068 1.79018 4.53771 3.1967 3.15676C4.60322 1.77581 6.51088 1 8.5 1C10.4891 1 12.3968 1.77581 13.8033 3.15676C15.2098 4.53771 16 6.41068 16 8.36364Z"
            stroke="#666666"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M8.5 10.8182C9.88071 10.8182 11 9.71927 11 8.36366C11 7.00806 9.88071 5.90912 8.5 5.90912C7.11929 5.90912 6 7.00806 6 8.36366C6 9.71927 7.11929 10.8182 8.5 10.8182Z"
            stroke="#666666"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export default MapPin;
