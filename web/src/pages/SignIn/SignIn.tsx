import TextInput from "../../components/Form/TextInput/TextInput";
import "./SignIn.css";
import User from "../../api/User";
import { useMutation } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

const SignInPage = () => {
    const [showLoader, setShowLoader] = useState<boolean>(false);
    const navigate = useNavigate({ from: "/sign-in" });

    const mutation = useMutation({
        mutationFn: User.login,
        onSuccess: () => {
            setShowLoader(false);
            navigate({ to: "/home" });
        },
        onError: (error) => {
            setShowLoader(false);
            console.error("Login Failed:", error);
        },
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setShowLoader(true);
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const userLoginInfo = Object.fromEntries(formData.entries()) as {
            email: string;
            password: string;
        };

        mutation.mutate(userLoginInfo);
    };

    return (
        <div className="sign-in wrapper">
            <div className="sign-in-form">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        validationState="default"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <TextInput
                        validationState="default"
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <div className="remember-me">
                        <div>
                            <input
                                type="checkbox"
                                name="remember_me"
                                value={"true"}
                                className="styled-checkbox"
                            />
                            <label>Remember me</label>
                        </div>
                        <span>Forgort Password</span>
                    </div>
                    <button type="submit">
                        {!showLoader ? "Login" : "Verifying...."}
                    </button>
                    {showLoader && (
                        <Loader
                            size={30}
                            loadColor="#00b207"
                            trackColor="#f3f3f3"
                        />
                    )}

                    <div className="register">
                        <p>
                            Don't have an account?{" "}
                            <span className="hover">Register</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
