import "./404.css";

const NotFound: React.FC = () => {
    return (
        <div className="not-found-wrapper">
            <img src="src/assets/icons//404.svg" />
            <h1>Oops! page not found</h1>
            <p>
                Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
                Maecenas sagittis tortor at metus mollis
            </p>
            <button>Back to Home</button>
        </div>
    );
};

export default NotFound;
