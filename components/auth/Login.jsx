import axios from "axios";
import { signIn } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "@/app/contextApi/contextProvider";
const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { token, setToken } = useContext(AppContext);

  const handleGoogleLogin = () => {
    console.log("Login with Google");
    // Google login logic here
  };

  const handleFacebookLogin = () => {
    console.log("Login with Facebook");
    // Facebook login logic here
  };

  // Process login data (send to backend)
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/user/login`,
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
        console.log("creadiantial working");
        setToken(token);
      }
      console.log(response);
    } catch (error) {
      if (error.status) {
        alert(error.response.data);
      }
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Log In to Your Account
        </h2>

        {/* Social Login Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-1/2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
          >
            <FaGoogle className="mr-2" /> Login with Google
          </button>
          <button
            onClick={handleFacebookLogin}
            className="flex items-center justify-center w-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            <FaFacebook className="mr-2" /> Login with Facebook
          </button>
        </div>

        <div className="relative flex items-center justify-center text-gray-500 mb-6">
          <span className="absolute inset-x-0 h-px bg-gray-300"></span>
          <span className="bg-white px-2 text-sm">Or log in with email</span>
        </div>

        {/* Login Form */}
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

          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;