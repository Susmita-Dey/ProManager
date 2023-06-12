import { account } from "@/appwrite/appwrite";
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
                                    <div className="flex flex-row gap-4">
                                        <p>Resetting Password...</p>
                                        <div role="status" className='flex justify-center items-center'>
                                            <svg aria-hidden="true" className="w-12 h-8 mr-2 animate-spin text-pink-800 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="sr-only text-white">Loading...</span>
                                        </div>
                                    </div>
                                ) : "Reset Password"}
                            </button>
                        </div>
                    </form>
                </div>
                <TailwindToaster />
            </div>
        </div>
    );
}

export default ResetPassword;
