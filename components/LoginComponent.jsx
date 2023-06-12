import React, { useState } from "react";
import { account } from "@/appwrite/appwrite";
import { useRouter } from "next/router";
import Link from "next/link";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function LoginComponent() {
  const router = useRouter();
  const [showResetForm, setShowResetForm] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const logInUser = await account.createEmailSession(
        user.email,
        user.password
      );
      console.log("Successfully logged in!");
      toast.success("Successfully logged in!");
      router.push("/");
    } catch (error) {
      if (error.code === 401) {
        console.log("Incorrect password");
        toast.error("Incorrect password");
      } else {
        console.log("Login failed:", error);
        toast.error(error.message);
      }
    }
  };

  const handlePasswordRecovery = async (e) => {
    e.preventDefault();
    setShowResetForm(true);
    try {
      const promise = await account.createRecovery(
        emailInput,
        `${window.location.origin}/reset-password`
      );
      toast.success("Password reset email sent! Check your inbox 📩");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="text-gray-900 min-h-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="text-center font-bold text-3xl text-white">
        {showResetForm ? "Reset Password" : "Sign In"}
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full max-w-md">
        <div className="bg-gray-200 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {showResetForm ? (
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-base font-medium">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-pink-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-base"
                    placeholder="example@gmail.com"
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  onClick={handlePasswordRecovery}
                >
                  Reset Password
                </button>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-base">
                  <button
                    onClick={() => setShowResetForm(false)}
                    className="font-medium text-pink-600 hover:text-pink-800 hover:underline hover:underline-offset-4"
                  >
                    Go Back to Login
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-base font-medium">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-pink-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-base"
                    placeholder="example@gmail.com"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="block text-base font-medium"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-pink-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-base"
                    placeholder="abc@123#"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
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
                <button
                  onClick={() => setShowResetForm(true)}
                  className="text-blue-900 mt-2 hover:underline hover:underline-offset-4 text-sm relative left-0 right-0 text-end"
                >
                  Forgot password?
                </button>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  onClick={loginUser}
                >
                  Sign In
                </button>
              </div>

              <div className="flex items-center justify-center">
                <Link
                  href="/signup"
                  className="text-base font-medium text-pink-600 hover:text-pink-800 hover:underline hover:underline-offset-4"
                >
                  Don&apos;t have an account? Sign Up
                </Link>
              </div>
            </form>
          )}
        </div>
        <TailwindToaster />
      </div>
    </div>
  );
}

export default LoginComponent;
