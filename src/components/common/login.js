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

        toast.success("Wow so easy!");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div class="flex items-center justify-center w-full">
    
    <div class="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
      <div class="mb-2 flex justify-center">
        <span class="inline-block w-full max-w-[100px]"></span>
      </div>
      <h2 class="text-center text-2xl font-bold leading-tight">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-base text-black/60">
        Don&apos;t have any account?&nbsp;
        <a href="/signup" class="font-medium text-primary transition-all duration-200 hover:underline">
          Sign Up
        </a>
      </p>
      {error && <p class="text-red-600 mt-8 text-center">{error}</p>}
      <form onSubmit={handleSubmit(login)} class="mt-8">
        <div class="space-y-5">
          <input
            label="Email: "
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
            class="w-full border p-2 rounded"
          />
          <input
            label="Password: "
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
            class="w-full border p-2 rounded"
          />
          <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
}

export default Login;
