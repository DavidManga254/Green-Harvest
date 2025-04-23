import {
    Box,
    Grid,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormControlLabel,
    Checkbox,
    RadioGroup,
    Radio,
    Button,
    Paper,
    Divider,
    Avatar,
} from "@mui/material";

const CheckOutPayPage: React.FC = () => {
    return (
        <Box sx={{ padding: 4, backgroundColor: "#fafafa" }}>
            <Grid container spacing={4}>
                {/* Billing Information */}
                <Grid item xs={12} md={8}>
                    <Typography variant="h6" gutterBottom>
                        Billing Information
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First name"
                                fullWidth
                                variant="outlined"
                                color="success"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last name"
                                fullWidth
                                variant="outlined"
                                color="success"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Company name"
                                fullWidth
                                variant="outlined"
                                color="success"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Street Address"
                                fullWidth
                                variant="outlined"
                                color="success"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel color="success">
                                    Country / Region
                                </InputLabel>
                                <Select
                                    label="Country / Region"
                                    color="success"
                                >
                                    <MenuItem value="usa">USA</MenuItem>
                                    <MenuItem value="canada">Canada</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel color="success">State</InputLabel>
                                <Select label="State" color="success">
                                    <MenuItem value="ny">New York</MenuItem>
                                    <MenuItem value="ca">California</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Zip Code"
                                fullWidth
                                variant="outlined"
                                color="success"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                fullWidth
                                variant="outlined"
                                color="success"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Phone"
                                fullWidth
                                variant="outlined"
                                color="success"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="success" />}
                                label="Ship to a different address"
                            />
                        </Grid>
                    </Grid>

                    <Box mt={4}>
                        <Typography variant="h6" gutterBottom>
                            Additional Info
                        </Typography>
                        <TextField
                            label="Order Notes (Optional)"
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            color="success"
                            placeholder="Notes about your order, e.g. special notes for delivery"
                        />
                    </Box>
                </Grid>

                {/* Order Summary */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Typography variant="h6">Order Summary</Typography>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            mb={1}
                        >
                            <Box display="flex" alignItems="center" gap={1}>
                                <Avatar
                                    alt="Green Capsicum"
                                    src="https://cdn.mos.cms.futurecdn.net/VmDx3obMsrncNiph4Lc5kW-1200-80.jpg" // Make sure this path is correct
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 1,
                                    }}
                                />
                                <Typography variant="body2">
                                    Green Capsicum ×5
                                </Typography>
                            </Box>
                            <Typography variant="body2">$70.00</Typography>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            mb={1}
                        >
                            <Box display="flex" alignItems="center" gap={1}>
                                <Avatar
                                    alt="Red Capsicum"
                                    src="https://cdn.mos.cms.futurecdn.net/VmDx3obMsrncNiph4Lc5kW-1200-80.jpg"
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 1,
                                    }}
                                />
                                <Typography variant="body2">
                                    Red Capsicum ×1
                                </Typography>
                            </Box>
                            <Typography variant="body2">$14.00</Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box display="flex" justifyContent="space-between">
                            <Typography>Subtotal:</Typography>
                            <Typography>$84.00</Typography>
                        </Box>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            mt={1}
                        >
                            <Typography>Shipping:</Typography>
                            <Typography>Free</Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1" fontWeight={600}>
                                Total:
                            </Typography>
                            <Typography variant="subtitle1" fontWeight={600}>
                                $84.00
                            </Typography>
                        </Box>

                        <Box mt={4}>
                            <Typography variant="subtitle1">
                                Payment Method
                            </Typography>
                            <RadioGroup defaultValue="cod">
                                <FormControlLabel
                                    value="cod"
                                    control={<Radio color="success" />}
                                    label="Cash on Delivery"
                                />
                                <FormControlLabel
                                    value="paypal"
                                    control={<Radio color="success" />}
                                    label="Paypal"
                                />
                                <FormControlLabel
                                    value="amazon"
                                    control={<Radio color="success" />}
                                    label="Amazon Pay"
                                />
                            </RadioGroup>
                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: "#00C853",
                                mt: 2,
                                "&:hover": { backgroundColor: "#00B44B" },
                            }}
                        >
                            Place Order
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CheckOutPayPage;
