import { CircularProgress, Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useQuery } from "@tanstack/react-query";
import Payment from "../../../../api/Payment";

interface ConfirmPaymentPageInterface {
    reference: string;
}

interface PaymentStatusResponse {
    status: string;
    message?: string;
}

const ConfirmPaymentPage: React.FC<ConfirmPaymentPageInterface> = ({
    reference,
}) => {
    const { data, error, isLoading, isError } = useQuery<PaymentStatusResponse>(
        {
            queryKey: ["payment verification", reference],
            queryFn: () => Payment.verifyPayment(reference),
            refetchOnWindowFocus: false,
        },
    );

    if (isLoading) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
            >
                <CircularProgress />
                <Typography variant="h6" mt={2}>
                    Verifying payment...
                </Typography>
            </Box>
        );
    }

    if (isError) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
            >
                <Typography variant="h6" color="error">
                    Payment Failed
                </Typography>
                <Typography variant="body1" color="error">
                    {(error as Error).message}
                </Typography>
            </Box>
        );
    }

    if (data?.status === "success") {
        return (
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
            >
                <CheckCircleIcon color="success" style={{ fontSize: 100 }} />
                <Typography variant="h5" color="green" mt={2}>
                    Payment Successful!
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
        >
            <Typography variant="h6" color="error">
                Payment Failed
            </Typography>
            <Typography variant="body1" color="error">
                {data?.message || "Payment verification failed."}
            </Typography>
        </Box>
    );
};

export default ConfirmPaymentPage;
