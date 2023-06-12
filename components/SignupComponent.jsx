import React, { useState } from "react";
import { account } from "@/appwrite/appwrite";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import Link from "next/link";
import toast from "react-hot-toast";
import TailwindToaster from "./TailwindToaster";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function SignupComponent() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Generate a random password
  const generatePassword = () => {
    const length = 10;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += charset.charAt(
        Math.floor(Math.random() * charset.length)
      );
    }
    setUser({
      ...user,
      password: generatedPassword,
    });
  };

  // Signup users
  const signupUser = async (e) => {
    e.preventDefault();

    // Check if the name contains numbers
    if (/\d/.test(user.name)) {
      toast.error("Name should not contain numbers.");
      return;
    }

    // Check password length
    if (user.password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    // Check password strength using a regular expression
    const passwordStrengthRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?!.*\s).{8,}$/;

    if (!passwordStrengthRegex.test(user.password)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    } else {
      toast.success("Woah!! Your password is strong. 💪");
    }

    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name
    );

    promise.then(
      async function (response) {
        console.log(response);
        toast.success("Successfully signed up!");
        setSignupSuccess(true);

        const logInUser = await account.createEmailSession(
          user.email,
          user.password
        );
        console.log("Succesfully logged in!");
        await account.get();

        // Send email verification request
        try {
          await account.createVerification(
            `${window.location.origin}/verify-email`
          );
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      },
      function (error) {
        console.log(error);
        toast.error(error.message);
      }
    );
  };

  return (
    <section className="text-gray-900 min-h-full flex flex-col justify-center items-center py-12 px-6 lg:px-8">
      <div className="text-center text-3xl font-bold text-white">Sign Up</div>
      <div className="mt-8 sm:mx-auto sm:w-full max-w-md">
        <div className="bg-gray-300 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-pink-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  placeholder="John Doe"
                  onChange={(e) => {
                    setUser({
                      ...user,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-pink-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  placeholder="example@gmail.com"
                  onChange={(e) => {
                    setUser({
                      ...user,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-pink-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  placeholder="abc@123#"
                  onChange={(e) => {
                    setUser({
                      ...user,
                      password: e.target.value,
                    });
                  }}
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
              <span className="text-sm font-medium text-pink-950 mt-1">
                * Password must be atleast 8 characters long
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                required
                className="accent-pink-900 w-5 h-5 mt-1"
              />
              <label className="text-rose-900 text-sm lg:text-base">
                By signing up, I accept the ProManager{" "}
                <Link
                  href={"/policy"}
                  className="text-purple-700 hover:underline hover:underline-offset-2"
                >
                  Terms of Service
                </Link>{" "}
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 text-white"
                onClick={signupUser}
              >
                Create account
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-sm">
                <Link
                  href="/login"
                  className="font-medium text-pink-600 hover:text-pink-800 hover:underline hover:underline-offset-4"
                >
                  Already have an account, Sign In
                </Link>
              </div>
            </div>
          </form>

          {/* <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-pink-500" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-300 text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
        <TailwindToaster />
      </div>
      <div>
        {signupSuccess && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg">
              <h2 className="text-2xl font-medium mb-4">Check Your Email</h2>
              <p className="text-lg text-gray-900">
                Hi there! 👋 Kindly close this window and check your email for a
                verification link. Click the link to verify your email address.
              </p>
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 text-lg rounded-md bg-pink-600 text-white hover:bg-pink-700"
                  onClick={() => {
                    setSignupSuccess(false);
                    window.location.close();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SignupComponent;
