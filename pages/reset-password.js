import { account } from "@/appwrite/appwrite";
import Loader from "@/components/Loader";
import TailwindToaster from "@/components/TailwindToaster";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function ResetPassword() {
    const router = useRouter()

    // Get the verification token from the query parameters
    const { secret, userId } = router.query;

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // useEffect(() => {
    //     // Check if the reset token is present in the URL query params
    //     if (secret) {
    //         toast.error("Token not found")
    //         // Token not found, redirect to the login page or show an error message
    //         router.push("/login");
    //     }
    // }, [router]);


    const handleResetPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Check password length
        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return;
        }

        // Check password strength using a regular expression
        const passwordStrengthRegex =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?!.*\s).{8,}$/;

        if (!passwordStrengthRegex.test(password)) {
            toast.error(
                "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character. Kindly reload the page and try again!!"
            );
            return;
        } else {
            toast.success("Woah!! Your password is strong. 💪");
        }

        try {
            // Call the appwrite method to reset the password
            await account.updateRecovery(userId, secret, password, confirmPassword);

            // Password reset successful, show success message and redirect to login page
            toast.success("Password reset successful!");
            router.push("/login");
            // window.location.reload()
        } catch (error) {
            // Password reset failed, show error message
            console.error("Password reset failed:", error);
            toast.error("Failed to reset password");
        }

        setIsLoading(false);
    };

    return (
        <div className="text-gray-900 min-h-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
            <div className="text-center font-bold text-2xl text-white">Reset Password</div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-gray-200 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleResetPassword}>
                        <div>
                            <label htmlFor="password" className="block text-base font-medium">
                                New Password
                            </label>
                            <span className="text-sm font-medium text-pink-950 mt-1">
                                * Password must be atleast 8 characters long
                            </span>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-pink-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-base"
                                    placeholder="Enter your new password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="text-red-500 absolute top-1/2 right-3 transform -translate-y-1/2"
                                    onClick={() => setShowPassword(!showPassword)} // Toggle the showPassword state
                                >
                                    {showPassword ? (
                                        <BsEyeFill className="text-2xl text-rose-600" />
                                    ) : (
                                        <BsEyeSlashFill className="text-2xl text-rose-600" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-base font-medium">
                                Confirm Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-pink-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-base"
                                    placeholder="Confirm your new password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="text-red-500 absolute top-1/2 right-3 transform -translate-y-1/2"
                                    onClick={() => setShowPassword(!showPassword)} // Toggle the showPassword state
                                >
                                    {showPassword ? (
                                        <BsEyeFill className="text-2xl text-rose-600" />
                                    ) : (
                                        <BsEyeSlashFill className="text-2xl text-rose-600" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="flex flex-row gap-4">
                                        <span>Resetting Password...</span>
                                        <Loader width="w-12" height="h-8" />
                                    </span>
                                ) : (
                                    <span>Reset Password</span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <TailwindToaster />
        </div>
    );
}

export default ResetPassword;
