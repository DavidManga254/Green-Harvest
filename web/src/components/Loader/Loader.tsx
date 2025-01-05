import "./Loader.css";

interface LoaderInterface {
    trackColor: string;
    loadColor: string;
    size: number;
}

const Loader: React.FC<LoaderInterface> = ({ loadColor, trackColor, size }) => (
    <div
        style={{
            border: `3px solid ${trackColor}`,
            borderTop: `3px solid ${loadColor}`,
            width: `${size}px`,
            height: `${size}px`,
        }}
        className="loader"
    ></div>
);

export default Loader;
