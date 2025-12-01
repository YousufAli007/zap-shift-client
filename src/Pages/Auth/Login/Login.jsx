import React   from 'react';
import { AuthContext } from '../../../Context/AuthContext/AuthContext';
import useAuth from '../../../Hook/useAuth';
import { useForm } from 'react-hook-form';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {
  const {singnInUser}=useAuth();
  const navigate =useNavigate()
  const location =useLocation()
  console.log(location);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const handleLogin = (data) => {
      singnInUser(data.email,data.password)
      .then(res =>{
        console.log(res)
        navigate(location?.state || '/')
      })
      .catch(error =>{
        console.log(error.message)
      })
    };
  
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Welcome Title */}
        <div className="px-8">
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-base-content/70">Login with ZapShift</p>
        </div>

        {/* Card */}
        <div className="p-8">
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control space-y-3">
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

              {/* Forgot Password */}
              <div>
                <a href="#" className="link text-sm">
                  Forget Password?
                </a>
              </div>

              {/* Login Button */}
              <button className="btn bg-primary text-white w-full text-lg h-12">
                Login
              </button>

              {/* Register Link */}
              <div className="text-center">
                <p className="text-sm">
                  Don't have an account?{" "}
                   <Link state={location.state} to='/ragister' className="link link-primary font-medium">Register</Link>
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-base-300"></div>
                <span className="text-base-content/60 text-sm">Or</span>
                <div className="flex-1 h-px bg-base-300"></div>
              </div>

              <GoogleLogin/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;