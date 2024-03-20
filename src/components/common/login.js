import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../common/authSlice.js";
import authService from "../common/auth.js";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
        }

        window.alert("Welcome to Job Portal");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
          Sign in to your account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary hover:text-primary-dark transition duration-300"
          >
            Sign Up
          </Link>
        </p>
        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}
        <form onSubmit={handleSubmit(login)}>
          <div className="space-y-4">
            <input
              label="Email"
              type="email"
              {...register("email", {
                required: true,
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              })}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
            <input
              label="Password"
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg transition duration-300 hover:bg-primary-dark"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
