import { useQuery } from "@tanstack/react-query";
import "./Shop.css";
import Produce from "../../api/Produce";
import Productcard from "../../components/ProductCard/ProductCard";

interface ShopPageInterface {
    page?: number;
}

const ShopPage: React.FC<ShopPageInterface> = ({ page }) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["Produce list Fetch", page, 20],
        queryFn: ({ queryKey }) => {
            const [, page, perPage] = queryKey;
            const parsedPage = parseInt(page as string);
            const parsedPerPage = parseInt(perPage as string);

            return Produce.getProduce(parsedPerPage, parsedPage);
        },
    });

    console.log("here is data", data);

    if (isLoading) {
        return <h1>isLoading</h1>;
    }

    if (error) {
        return <h1>error</h1>;
    }

    return (
        <div className="shop-page">
            <div className="product-shop-list">
                {data.data.map((produce, index: number) => (
                    <Productcard
                        productImage={produce.images.image_path}
                        productName={produce.name}
                        onSale={produce.is_on_sale}
                        price={produce.price_per_unit}
                        rating={produce.rating}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
