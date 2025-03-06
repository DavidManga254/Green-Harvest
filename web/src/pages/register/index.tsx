import { useNavigate } from "@tanstack/react-router";
import "./index.css";
import { useMutation } from "@tanstack/react-query";
import User from "../../api/User";
import TextInput from "../../components/Form/TextInput/TextInput";

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: User.register,
        onSuccess: () => {
            navigate({ to: "/home" });
        },
        onError: (error) => {
            console.error("register Failed:", error);
        },
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const userRegisterInfo = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
            phone?: string;
            role?: string;
            address?: string;
        };

        mutation.mutate(userRegisterInfo);
    };

    const handleNavigation = (routeName: string) => navigate({ to: routeName });

    return (
        <div className="register-page">
            <div className="register-section">
                <h1>Create Account</h1>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        validationState="default"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        disabled={mutation.isPending}
                    />
                    <TextInput
                        validationState="default"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        disabled={mutation.isPending}
                    />
                    <TextInput
                        validationState="default"
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        required
                        disabled={mutation.isPending}
                    />
                    <TextInput
                        validationState="default"
                        type="password"
                        name="phone"
                        placeholder="phone"
                        required
                        disabled={mutation.isPending}
                    />
                    <TextInput
                        validationState="default"
                        type="password"
                        name="address"
                        placeholder="Address (Optional)"
                        disabled={mutation.isPending}
                    />
                    <div className="accept-conditions">
                        <div>
                            <input
                                type="checkbox"
                                name="remember_me"
                                value={"true"}
                                className="styled-checkbox"
                            />
                            <label>Accepts all terms & Conditions</label>
                        </div>
                    </div>
                    <button disabled={mutation.isPending} type="submit">
                        {!mutation.isPending
                            ? "Create Account"
                            : "Creating account...."}
                    </button>
                    <div className="login-prompt">
                        <p>
                            Already have an account{" "}
                            <span
                                onClick={() => handleNavigation("/sign-in")}
                                className="hover"
                            >
                                login
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
