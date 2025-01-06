import "./ProductDetail.css";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import Produce from "../../api/Produce";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

interface ProductDetailInterface {
    productId: number | string;
}

const ProductDetailPage: React.FC<ProductDetailInterface> = ({ productId }) => {
    const navigate = useNavigate();

    const { data, error, isLoading } = useQuery({
        queryKey: [`Product${productId}`, productId],
        queryFn: ({ queryKey }) => {
            const [, productId] = queryKey;

            return Produce.getProductDetails(productId);
        },
    });

    if (isLoading) {
        return <h1>isLoading</h1>;
    }

    if (error) {
        return <h1>error</h1>;
    }

    const productData = data.data;

    return (
        <div className="product-detail-wrapper">
            <div className="product-detail-section">
                <ProductDetail
                    category={productData.category}
                    description={productData.description}
                    images={productData.images}
                    is_on_sale={productData.is_on_sale}
                    name={productData.name}
                    price_per_unit={productData.price_per_unit}
                    rating={productData.rating}
                />
            </div>
        </div>
    );
};

export default ProductDetailPage;
