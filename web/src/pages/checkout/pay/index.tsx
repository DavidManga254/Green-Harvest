import {
    Box,
    Grid,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    // FormControlLabel,
    // Checkbox,
    // RadioGroup,
    // Radio,
    Button,
    Paper,
    Divider,
    Avatar,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Card,
    CardContent,
} from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useMutation, useQuery } from "@tanstack/react-query";
import Payment from "../../../api/Payment";
import { toast } from "react-toastify";
import User from "../../../api/User";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Cart from "../../../api/Cart";

type BillingInfo = {
    full_name: string;
    address_line_1: string;
    address_line_2?: string;
    city: string;
    county: string;
    postal_code: string;
    country: string;
    notes?: string;
    phone: string;
};

const CheckOutPayPage: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            full_name: "",
            address_line_1: "",
            address_line_2: "",
            city: "",
            postal_code: "",
            country: "Kenya",
            notes: "",
            county: "",
            phone: "",
        },
    });

    const {
        data: cart_items,
        isLoadding: cart_loading,
        error,
    } = useQuery({
        queryKey: ["cart content"],
        queryFn: Cart.getCartContent,
    });

    const {
        mutate: triggerPayment,
        isPending,
        isError,
    } = useMutation({
        mutationFn: (formData: BillingInfo) => Payment.createPayment(formData),
        onError: () => {
            toast.error("Payment failed. Please try again.", {
                position: "top-right",
                autoClose: 5000,
            });
        },
        onSuccess: (res) => {
            if (res?.authorization_url) {
                console.log("Payment URL:", res.authorization_url);
                window.location.href = res.authorization_url.url;
            } else {
                toast.error("Invalid payment link received.", {
                    position: "top-right",
                    autoClose: 5000,
                });
            }
        },
        onMutate: () => {
            toast("Processing payment… Please wait.", {
                toastId: "processing-payment",
                position: "top-right",
                isLoading: true,
                closeOnClick: false,
                closeButton: false,
                autoClose: false,
                style: {
                    borderLeft: "6px solid #00C853",
                    backgroundColor: "#e8f5e9",
                    color: "#1b5e20",
                },
            });
        },
    });

    const {
        data: billingAddresses,
        error: billinAddressesFetchError,
        isLoading,
    } = useQuery({
        queryKey: ["billing-addresses"],
        queryFn: User.getBillingAddresses,
    });

    const handlePlaceOrder = handleSubmit((formData) => {
        // Save billing address and trigger payment in sequence
        toast.dismiss("processing-payment");

        triggerPayment(formData); // This now includes billing data
    });

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleApplyTemplate = (template: any) => {
        setValue("full_name", template.full_name || "");
        setValue("address_line_1", template.address_line_1 || "");
        setValue("address_line_2", template.address_line_2 || "");
        setValue("city", template.city || "");
        setValue("county", template.county || "");
        setValue("postal_code", template.postal_code || "");
        setValue("country", template.country || "");
        setValue("notes", template.notes || "");
        setValue("phone", template.phone || "");

        setOpenModal(false); // optionally close modal after selection
    };

    function calculateSubtotal(quantity: number, price: number): number {
        return quantity * price;
    }

    type Item = {
        quantity: number;
        price: number;
    };

    function calculateTotal(items: Item[]): number {
        return items.reduce((total, item) => {
            return total + calculateSubtotal(item.quantity, item.price);
        }, 0);
    }

    return (
        <Box sx={{ padding: 4, backgroundColor: "#fafafa" }}>
            <Grid container spacing={4}>
                {/* Billing Information */}
                <Grid item xs={12} md={8}>
                    <Typography variant="h6" gutterBottom>
                        Billing Information
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                        <Button
                            variant="outlined"
                            color="success"
                            startIcon={<ListAltIcon />}
                            onClick={handleOpenModal}
                            sx={{
                                textTransform: "none",
                                fontWeight: 500,
                                borderRadius: 2,
                                px: 2,
                                py: 1,
                            }}
                        >
                            Billing Templates
                        </Button>
                    </Box>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Full Name"
                                    fullWidth
                                    variant="outlined"
                                    color="success"
                                    {...register("full_name", {
                                        required: "Required",
                                    })}
                                    error={!!errors.full_name}
                                    helperText={errors.full_name?.message}
                                    slotProps={{ inputLabel: { shrink: true } }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Address Line 1"
                                    fullWidth
                                    variant="outlined"
                                    color="success"
                                    {...register("address_line_1", {
                                        required: "Required",
                                    })}
                                    error={!!errors.address_line_1}
                                    helperText={errors.address_line_1?.message}
                                    slotProps={{ inputLabel: { shrink: true } }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Address Line 2 (Optional)"
                                    fullWidth
                                    variant="outlined"
                                    color="success"
                                    {...register("address_line_2")}
                                    slotProps={{ inputLabel: { shrink: true } }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="City"
                                    fullWidth
                                    variant="outlined"
                                    color="success"
                                    {...register("city", {
                                        required: "Required",
                                    })}
                                    error={!!errors.city}
                                    helperText={errors.city?.message}
                                    slotProps={{ inputLabel: { shrink: true } }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth error={!!errors.county}>
                                    <InputLabel color="success">
                                        County
                                    </InputLabel>
                                    <Select
                                        label="County"
                                        color="success"
                                        defaultValue=""
                                        {...register("county", {
                                            required: "Required",
                                        })}
                                    >
                                        {[
                                            "Nairobi",
                                            "Mombasa",
                                            "Kisumu",
                                            "Nakuru",
                                            "Kiambu",
                                            "Machakos",
                                            "Kajiado",
                                            "Nyeri",
                                            "Meru",
                                            "Eldoret",
                                            "Kericho",
                                            "Embu",
                                            "Laikipia",
                                            "Murang’a",
                                            "Bungoma",
                                            "Turkana",
                                            "Narok",
                                            "Bomet",
                                            "Garissa",
                                            "Isiolo",
                                            "Tharaka-Nithi",
                                        ].map((county) => (
                                            <MenuItem
                                                key={county}
                                                value={county}
                                            >
                                                {county}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {errors.county && (
                                        <Typography
                                            color="error"
                                            variant="caption"
                                        >
                                            {errors.county.message}
                                        </Typography>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Postal Code"
                                    fullWidth
                                    variant="outlined"
                                    color="success"
                                    {...register("postal_code", {
                                        required: "Required",
                                    })}
                                    error={!!errors.postal_code}
                                    helperText={errors.postal_code?.message}
                                    slotProps={{ inputLabel: { shrink: true } }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Phone Number"
                                    fullWidth
                                    variant="outlined"
                                    color="success"
                                    {...register("phone", {
                                        required: "Required",
                                    })}
                                    error={!!errors.phone}
                                    helperText={errors.phone?.message}
                                    slotProps={{ inputLabel: { shrink: true } }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Country"
                                    fullWidth
                                    variant="outlined"
                                    color="success"
                                    disabled
                                    {...register("country")}
                                    slotProps={{ inputLabel: { shrink: true } }}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    type="submit"
                                    disabled={saving}
                                    fullWidth
                                >
                                    {saving
                                        ? "Saving..."
                                        : "Save Billing Address"}
                                </Button>
                            </Grid> */}
                        </Grid>
                    </form>

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
                            {...register("notes")}
                            slotProps={{ inputLabel: { shrink: true } }}
                        />
                    </Box>
                </Grid>

                {/* Order Summary */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Typography variant="h6">Order Summary</Typography>
                        {!cart_loading ? (
                            <>
                                {cart_items.cart_items.map((item, index) => (
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        mb={1}
                                        key={index}
                                    >
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap={1}
                                        >
                                            <Avatar
                                                alt={item.produce.name}
                                                src={item.produce.image} // Make sure this path is correct
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 1,
                                                }}
                                            />
                                            <Typography variant="body2">
                                                {item.produce.name} ×
                                                {item.quantity}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2">
                                            {calculateSubtotal(
                                                item.price,
                                                item.quantity,
                                            )}
                                        </Typography>
                                    </Box>
                                ))}
                                <Divider sx={{ my: 2 }} />
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Typography>Subtotal:</Typography>
                                    <Typography>
                                        {calculateTotal(cart_items.cart_items)}
                                    </Typography>
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
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                    >
                                        Total:
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                    >
                                        {calculateTotal(cart_items.cart_items)}
                                    </Typography>
                                </Box>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#00C853",
                                        mt: 2,
                                        "&:hover": {
                                            backgroundColor: "#00B44B",
                                        },
                                    }}
                                    onClick={handlePlaceOrder}
                                    disabled={isError || isPending}
                                    startIcon={
                                        isPending && (
                                            <CircularProgress
                                                size={20}
                                                color="inherit"
                                            />
                                        )
                                    }
                                >
                                    Place Order
                                </Button>
                            </>
                        ) : (
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                height="100%"
                            >
                                <CircularProgress />
                            </Box>
                        )}
                    </Paper>
                </Grid>
            </Grid>
            {/* Modal for Billing Addresses */}
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        maxHeight: "80vh", // limits height to allow scrolling
                    },
                }}
            >
                <DialogTitle>Billing Address Templates</DialogTitle>

                <DialogContent
                    dividers
                    sx={{
                        overflowY: "auto",
                        overflowX: "hidden",
                    }}
                >
                    {isLoading ? (
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            height="100%"
                        >
                            <CircularProgress />
                        </Box>
                    ) : billinAddressesFetchError ||
                      !billingAddresses?.length ? (
                        <Typography>No templates available.</Typography>
                    ) : (
                        <Grid container spacing={2}>
                            {billingAddresses.map(
                                (address: any, index: number) => (
                                    <Grid item xs={12} key={address.id}>
                                        <Card
                                            sx={{
                                                cursor: "pointer",
                                                "&:hover": {
                                                    backgroundColor: "#f5f5f5",
                                                },
                                            }}
                                            onClick={() =>
                                                handleApplyTemplate(address)
                                            }
                                            variant="outlined"
                                        >
                                            <CardContent>
                                                <Typography
                                                    variant="h6"
                                                    gutterBottom
                                                >
                                                    Address {index + 1}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>Full Name:</strong>{" "}
                                                    {address.full_name}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>Phone:</strong>{" "}
                                                    {address.phone}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>
                                                        Address Line 1:
                                                    </strong>{" "}
                                                    {address.address_line_1}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>
                                                        Address Line 2:
                                                    </strong>{" "}
                                                    {address.address_line_2}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>City:</strong>{" "}
                                                    {address.city}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>County:</strong>{" "}
                                                    {address.county}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>
                                                        Postal Code:
                                                    </strong>{" "}
                                                    {address.postal_code}
                                                </Typography>
                                                <Typography variant="body2">
                                                    <strong>Country:</strong>{" "}
                                                    {address.country}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ),
                            )}
                        </Grid>
                    )}
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CheckOutPayPage;
