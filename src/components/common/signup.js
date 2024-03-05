import React, { useState } from 'react';
import authService from '../common/auth.js';
import {Link, useNavigate} from 'react-router-dom'
import { login } from '../common/authSlice.js';
import { set, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signup(){

    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()


    const create = async (data) =>{
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData))

                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div class="flex items-center justify-center">
        <div class="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
          <div class="mb-2 flex justify-center">
            <span class="inline-block w-full max-w-[100px]"></span>
          </div>
          <h2 class="text-center text-2xl font-bold leading-tight">Sign up to create an account</h2>
          <p class="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <a href="/login" class="font-medium text-primary transition-all duration-200 hover:underline">
              Sign In
            </a>
          </p>
          {error && <p class="text-red-600 mt-8 text-center">{error}</p>}
      
          <form onSubmit={handleSubmit(create)} class="mt-4">
            <div class="space-y-5">
              <input
                label="Full Name: "
                placeholder="Enter your full name"
                {...register("name", {
                  required: true,
                })}
                class="w-full border p-2 rounded"
              />
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
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
      
    )
}

export default Signup;