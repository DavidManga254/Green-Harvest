import {
    Stepper,
    Step,
    StepLabel,
    Button,
    TextField,
    Box,
    Typography,
    CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import User from "../../api/User";
import { useNavigate } from "@tanstack/react-router";

const steps = ["Account Details", "Verify Email"];

const SignupStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState<any>({});

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const registerMutation = useMutation({
        mutationFn: User.register,
        onMutate: () => {
            toast.info("Registering account...");
        },
        onSuccess: () => {
            toast.success(
                "Registration successful. Check your email for the token.",
            );
            setActiveStep(1);

            navigate({ to: "/home" });
        },
        onError: () => {
            toast.error("Registration failed. Email may already be in use.");
        },
    });

    const confirmEmailMutation = useMutation({
        mutationFn: User.confirmEmail,
        onMutate: () => {
            toast.info("Verifying email...");
        },
        onSuccess: () => {
            toast.success("Email confirmed successfully.");
            reset();
            setActiveStep(0);
        },
        onError: () => {
            toast.error("Invalid token or email.");
        },
    });

    const onSubmitStep1 = (data: any) => {
        const payload = {
            ...data,
            role: "consumer", // force user role
            address: "123",
        };
        setFormData(payload);
        registerMutation.mutate(payload);
    };

    const onSubmitStep2 = (data: any) => {
        confirmEmailMutation.mutate({
            email: formData.email,
            token: data.token,
        });
    };

    return (
        <Box sx={{ maxWidth: 500, margin: "auto", mt: 5 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {activeStep === 0 && (
                <form onSubmit={handleSubmit(onSubmitStep1)}>
                    <TextField
                        fullWidth
                        label="Name"
                        margin="normal"
                        {...register("name", { required: true })}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        {...register("email", { required: true })}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        margin="normal"
                        type="password"
                        {...register("password", { required: true })}
                    />
                    <TextField
                        fullWidth
                        label="Phone"
                        margin="normal"
                        {...register("phone")}
                    />
                    <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        fullWidth
                        sx={{ mt: 2 }}
                        disabled={registerMutation.isLoading}
                        startIcon={
                            registerMutation.isLoading ? (
                                <CircularProgress size={20} color="inherit" />
                            ) : null
                        }
                    >
                        {registerMutation.isLoading
                            ? "Registering..."
                            : "Register"}
                    </Button>
                </form>
            )}

            {activeStep === 1 && (
                <form onSubmit={handleSubmit(onSubmitStep2)}>
                    <Typography sx={{ mt: 2 }}>
                        A confirmation token was sent to your email.
                    </Typography>
                    <TextField
                        fullWidth
                        label="Verification Token"
                        margin="normal"
                        {...register("token", { required: true })}
                    />
                    <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        fullWidth
                        sx={{ mt: 2 }}
                        disabled={confirmEmailMutation.isLoading}
                        startIcon={
                            confirmEmailMutation.isLoading ? (
                                <CircularProgress size={20} color="inherit" />
                            ) : null
                        }
                    >
                        {confirmEmailMutation.isLoading
                            ? "Verifying..."
                            : "Confirm Email"}
                    </Button>
                </form>
            )}
        </Box>
    );
};

export default SignupStepper;
