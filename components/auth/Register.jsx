import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = watch("password"); // Watch password to compare with confirmPassword

  const handleGoogleSignUp = () => {
    console.log("Sign up with Google");
    // Google sign-up logic here
  };

  const handleFacebookSignUp = () => {
    console.log("Sign up with Facebook");
    // Facebook sign-up logic here
  };

  const onSubmit = async (data) => {
    // Process sign-up data (send to backend)
    if (data?.password === data?.confirmPassword) {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/v1/user/register`,
          {
            data: {
              email: data.email,
              password: data.password,
            },
          }
        );
        const { token } = response.data;
        console.log(token);
        if (token) {
          await signIn("credentials", {
            redirect: false,
            email: data.email,
            token,
          });
          console.log("creadiantial working");
        }
        console.log(response);
      } catch (error) {
        if (error.status) {
          alert(error.response.data);
        }
      }
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Create an Account
        </h2>

        {/* Social Sign-up Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={handleGoogleSignUp}
            className="flex items-center justify-center w-1/2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
          >
            <FaGoogle className="mr-2" /> Sign up with Google
          </button>
          <button
            onClick={handleFacebookSignUp}
            className="flex items-center justify-center w-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            <FaFacebook className="mr-2" /> Sign up with Facebook
          </button>
        </div>

        <div className="relative flex items-center justify-center text-gray-500 mb-6">
          <span className="absolute inset-x-0 h-px bg-gray-300"></span>
          <span className="bg-white px-2 text-sm">Or sign up with email</span>
        </div>

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Re-type Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Re-enter your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
