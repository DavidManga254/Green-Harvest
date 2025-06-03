import { useQuery } from "@tanstack/react-query";
import "./Shop.css";
import Produce from "../../api/Produce";
import Productcard from "../../components/ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid, Grid2, PaginationItem } from "@mui/material";
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
import ProductCard2, {
    ProductCard2Skeleton,
} from "../../components/ProductCard2";

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

    if (error) {
        return <h1>error</h1>;
    }

    const produceData = data?.data || [];
    const paginationData = data?.pagination;

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
                    <div className="Side-bar">{/* <ShopSidebar /> */}</div>
                )}
                <div className="product-wrapper">
                    <Grid container spacing={2}>
                        {/* {produceData.map((produce, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProductCard2 product={produce} />
                            </Grid>
                        ))} */}
                        {isLoading
                            ? [...Array(8)].map((_, i) => (
                                  <Grid item xs={12} sm={6} md={4} key={i}>
                                      <ProductCard2Skeleton />
                                  </Grid>
                              ))
                            : produceData.map((produce, index) => (
                                  <Grid
                                      item
                                      xs={12}
                                      sm={6}
                                      md={3}
                                      key={index}
                                      sx={{ width: "100%" }}
                                  >
                                      <ProductCard2 product={produce} />
                                  </Grid>
                              ))}
                    </Grid>
                    {paginationData && (
                        <div className="pagination">
                            <Pagination
                                count={Math.ceil(
                                    paginationData.total /
                                        paginationData.per_page,
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
