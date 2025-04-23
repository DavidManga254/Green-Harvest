import PropmtArrow from "../../assets/icons/PromptArrow";
import StarRating from "../StarRating/StarRating";
import "./ShopSidebar.css";
import {
    Box,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Checkbox,
    Stack,
    Chip,
    Paper,
} from "@mui/material";

const ShopSidebar: React.FC = () => {
    return (
        <div className="shop-side-bar">
            <form>
                {/* Categories */}
                <FormControl component="fieldset" sx={{ mb: 1 }}>
                    <FormLabel component="legend">
                        <Typography variant="h6" fontWeight={600}>
                            All Categories
                        </Typography>
                    </FormLabel>
                    <RadioGroup name="category">
                        {[
                            { label: "Fresh Fruit", count: 134 },
                            { label: "Vegetable", count: 14 },
                            { label: "Cooking", count: 45 },
                            { label: "Snacks", count: 47 },
                            { label: "Beverages", count: 38 },
                            { label: "Bread & Bakery", count: 18 },
                        ].map(({ label, count }) => (
                            <FormControlLabel
                                key={label}
                                value={label}
                                control={
                                    <Radio
                                        sx={{
                                            "&.Mui-checked": {
                                                color: "#3BB77E",
                                            },
                                        }}
                                    />
                                }
                                label={
                                    <Typography>
                                        {label}{" "}
                                        <span style={{ color: "#999" }}>
                                            ({count})
                                        </span>
                                    </Typography>
                                }
                            />
                        ))}
                    </RadioGroup>
                </FormControl>

                {/* Ratings */}
                <FormControl component="fieldset" sx={{ mb: 1 }}>
                    <FormLabel component="legend">
                        <Typography variant="h6" fontWeight={600}>
                            Rating
                        </Typography>
                    </FormLabel>
                    <Stack spacing={1}>
                        {[5, 4, 3, 2, 1].map((rate) => (
                            <FormControlLabel
                                key={rate}
                                control={
                                    <Checkbox
                                        sx={{
                                            "&.Mui-checked": {
                                                color: "#3BB77E",
                                            },
                                        }}
                                        name="rating"
                                    />
                                }
                                label={
                                    <>
                                        <StarRating rating={rate} />
                                        <Typography component="span">
                                            {rate}.0 & up
                                        </Typography>
                                    </>
                                }
                            />
                        ))}
                    </Stack>
                </FormControl>
                <div className="tags">
                    <div className="title">
                        <h1>Popular Tag</h1>
                    </div>
                    <div className="popular-tag-list">
                        <span>Healthy</span>
                        <span>Low fat</span>
                        <span>vegeterian</span>
                        <span>Kid foods</span>
                        <span>Vitamins</span>
                        <span>Bread</span>
                        <span>Meat</span>
                        <span>Snacks</span>
                        <span>Tiffin</span>
                        <span>Launch</span>
                    </div>
                </div>
                <div className="discount-offer">
                    <div className="discount-text">
                        <p>
                            <span>79%</span> Discount
                        </p>
                        <p className="small">on your first order</p>
                    </div>
                    <p className="prompt-shop">
                        Shop Now <PropmtArrow width="15" height="12" />{" "}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default ShopSidebar;
