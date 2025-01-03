import "./SearchBar.css";
import Search from "../../assets/icons/search";

const SearchBar: React.FC = () => {
    return (
        <div className="search-bar-wrapper">
            <div className="search-section">
                <Search width="20" height="20" />
                <input type="text" placeholder="Search" />
            </div>
            <button>Search</button>
        </div>
    );
};

export default SearchBar;
