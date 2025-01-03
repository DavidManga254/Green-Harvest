import "./CategoryCard.css";

interface CategorycardInterface {
    name: string;
    image: string;
}

const CategoryCard: React.FC<CategorycardInterface> = ({ name, image }) => {
    return (
        <div className="category-card">
            <img src={image} />
            <span className="category-name">{name}</span>
        </div>
    );
};

export default CategoryCard;
