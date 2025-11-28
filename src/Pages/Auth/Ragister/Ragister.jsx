import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hook/useAuth';
import { FcGoogle } from 'react-icons/fc';

const Ragister = () => {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const { createUser } = useAuth();
   
  const handleRagistration =(data)=>{
     createUser(data.email,data.password)
     .then(res =>{
      console.log(res)
     })
     .catch(error =>{
      console.log(error)
     })
    
  }
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Welcome Title */}
        <div className="px-8">
          <h1 className="text-4xl font-bold mb-2">Create an Account</h1>
          <p className="text-base-content/70">Register with ZapShift</p>
        </div>

        {/* Card */}
        <div className="p-8">
          <form onSubmit={handleSubmit(handleRagistration)}>
            <div className="form-control space-y-3">
              {/* Email Field */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Name</span>
                </label>

                {errors.name && (
                  <p className="text-red-500 text-sm">Name is required</p>
                )}

                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full h-12 text-base"
                  {...register("name", { required: true })}
                />
              </div>
              {/* Email Field */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>

                {errors.email && (
                  <p className="text-red-500 text-sm">Email is required</p>
                )}

                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full h-12 text-base"
                  {...register("email", { required: true })}
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>

                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-sm">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-sm">
                    Password should be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 text-sm">
                    Must include 1 uppercase, 1 lowercase & 1 number
                  </p>
                )}

                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full h-12 text-base"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                  })}
                />
              </div>

             
 

              {/* Login Button */}
              <button className="btn bg-primary text-white w-full text-lg h-12">
                Login
              </button>

              {/* Register Link */}
              <div className="text-center">
                <p className="text-sm">
                  Don't have an account?{" "}
                  <a href="#" className="link link-primary font-medium">
                    Login
                  </a>
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-base-300"></div>
                <span className="text-base-content/60 text-sm">Or</span>
                <div className="flex-1 h-px bg-base-300"></div>
              </div>

              {/* Google Login */}
              <button
                type="button"
                className="btn btn-outline w-full h-12 flex items-center justify-center gap-3 bg-gray-300 text-base"
              >
                <FcGoogle className="text-2xl" />
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ragister;