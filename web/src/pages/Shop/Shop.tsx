import { useQuery } from "@tanstack/react-query";
import "./Shop.css";
import Produce from "../../api/Produce";
import Productcard from "../../components/ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PaginationItem } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import ShopSidebar from "../../components/ShopSidebar/ShopSidebar";
import {
    Drawer,
    IconButton,
    useMediaQuery,
    useTheme,
    Button,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

interface ShopPageInterface {
    page?: number;
}

const ShopPage: React.FC<ShopPageInterface> = ({ page }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // 'md' or 'sm'
    const [filterOpen, setFilterOpen] = useState(false);

    const navigate = useNavigate();

    const { data, error, isLoading } = useQuery({
        queryKey: [`Produce list Page ${page}`, page, 21],
        queryFn: ({ queryKey }) => {
            const [, page, perPage] = queryKey;
            const parsedPage = parseInt(page as string);
            const parsedPerPage = parseInt(perPage as string);

            return Produce.getProduce(parsedPerPage, parsedPage);
        },
    });

    const handleProductNavigation = (productId: number | string) => {
        navigate({ to: `/product/${productId}` });
    };
    const handlePageNav = (
        event: React.ChangeEvent<unknown>,
        value: number,
    ) => {
        navigate({ to: "/shop", search: { page: value } });
    };

    console.log("here is data", data);

    if (isLoading) {
        return <h1>isLoading</h1>;
    }

    if (error) {
        return <h1>error</h1>;
    }

    const produceData: [] = data.data;
    const paginationData = data.pagination;

    console.log(produceData);

    return (
        <div className="shop-page">
            {isMobile && (
                <>
                    <div className="mobile-filter">
                        <Button
                            variant="outlined"
                            startIcon={<FilterListIcon />}
                            onClick={() => setFilterOpen(true)}
                            sx={{
                                marginBottom: 2,
                                color: "#3BB77E",
                                borderColor: "#3BB77E",
                            }}
                        >
                            Filters
                        </Button>
                    </div>
                    <Drawer
                        anchor="left"
                        open={filterOpen}
                        onClose={() => setFilterOpen(false)}
                    >
                        <div style={{ padding: "20px", width: "300px" }}>
                            <IconButton onClick={() => setFilterOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                            <ShopSidebar />
                        </div>
                    </Drawer>
                </>
            )}
            <div className="content-section">
                {!isMobile && (
                    <div className="Side-bar">
                        <ShopSidebar />
                    </div>
                )}
                <div className="product-wrapper">
                    <div className="product-shop-list">
                        {produceData.map((produce, index: number) => (
                            <Productcard
                                onUserClick={() =>
                                    handleProductNavigation(produce.id)
                                }
                                productImage={
                                    produce.images
                                        ? produce.images.image_path
                                        : ""
                                }
                                productName={produce.name}
                                onSale={produce.is_on_sale}
                                price={produce.price_per_unit}
                                rating={produce.rating}
                                id={produce.id}
                                key={index}
                            />
                        ))}
                    </div>
                    <div className="pagination">
                        <Pagination
                            count={Math.ceil(
                                paginationData.total / paginationData.per_page,
                            )}
                            page={paginationData.current_page}
                            color="standard"
                            size="large"
                            showFirstButton
                            showLastButton
                            onChange={handlePageNav}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{
                                        previous: ArrowBackIcon,
                                        next: ArrowForwardIcon,
                                    }}
                                    {...item}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
