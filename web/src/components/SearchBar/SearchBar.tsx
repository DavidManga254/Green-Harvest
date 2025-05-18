import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    Autocomplete,
    TextField,
    IconButton,
    Box,
    Avatar,
    Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, Link } from "@tanstack/react-router";
import { Route } from "../../routes/(user)/product/search-results";
import Produce from "../../api/Produce";

const SearchBar: React.FC = () => {
    const navigate = useNavigate();

    // Load initial search query from URL
    let initialQuery = "";
    try {
        initialQuery = Route.useSearch().query || "";
    } catch {
        initialQuery = "";
    }

    const [query, setQuery] = useState(initialQuery);

    const { data: suggestions } = useQuery({
        queryKey: ["live-search", query],
        queryFn: () => Produce.searchProduce({ name: query }),
        enabled: query.length >= 2,
    });

    const options = suggestions?.data || [];

    const handleSearch = () => {
        if (query.trim()) {
            navigate({
                to: "/product/search-results",
                search: { query: query.trim() },
            });
        }
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            width="100%"
            maxWidth={400}
            sx={{
                border: "1px solid #ccc",
                borderRadius: 2,
                overflow: "hidden",
                "&:focus-within": {
                    borderColor: "green",
                },
                paddingLeft: "15px",
            }}
        >
            <Autocomplete
                fullWidth
                freeSolo
                options={options}
                getOptionLabel={(option) => option.name || ""}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                inputValue={query}
                onInputChange={(_, newInput) => setQuery(newInput)}
                onChange={(_, value) => {
                    if (value?.id) {
                        navigate({
                            to: `/product/$productId`,
                            params: { productId: value.id },
                        });
                    }
                }}
                renderOption={(props, option) => (
                    <li {...props} key={option.id} style={{ padding: 0 }}>
                        <Link
                            to={`/product/$productId`}
                            params={{ productId: option.id }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                                padding: "10px 12px",
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            <Box display="flex" alignItems="center">
                                <Avatar
                                    src={
                                        option.images?.image_path ||
                                        "/placeholder.png"
                                    }
                                    alt={option.name}
                                    sx={{ width: 40, height: 40, mr: 1.5 }}
                                />
                                <Typography fontWeight={500}>
                                    {option.name}
                                </Typography>
                            </Box>

                            <Box textAlign="right">
                                <Typography
                                    fontSize="0.875rem"
                                    fontWeight={500}
                                    color="green"
                                >
                                    Ksh
                                    {Number(option.price_per_unit).toFixed(2)}
                                </Typography>
                                {option.discount && (
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            textDecoration: "line-through",
                                            color: "gray",
                                            fontSize: "0.75rem",
                                        }}
                                    >
                                        Ksh
                                        {(
                                            Number(option.price_per_unit) +
                                            Number(option.discount)
                                        ).toFixed(2)}
                                    </Typography>
                                )}
                            </Box>
                        </Link>
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search produce..."
                        variant="standard"
                        InputProps={{
                            ...params.InputProps,
                            disableUnderline: true,
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                handleSearch();
                            }
                        }}
                    />
                )}
            />

            <IconButton
                onClick={handleSearch}
                color="success"
                sx={{ px: 2 }}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Box>
    );
};

export default SearchBar;
