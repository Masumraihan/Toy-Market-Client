import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className='my-10 mx-5'>
      <h1 className='text-4xl text-center font-bold'>Login</h1>
      <div className='card-body md:w-2/3 lg:w-1/3 mx-auto border py-10 my-10 rounded-lg'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='email'
            className='input input-bordered'
            name='email'
            required
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            placeholder='password'
            className='input input-bordered'
            name='password'
            required
          />
          <label className='label'>
            <a href='#' className='label-text-alt link link-hover'>
              Forgot password?
            </a>
          </label>
        </div>
        <div className='form-control mt-6'>
          <button className='btn btn-regular'>Login</button>
        </div>
        <div className="divider">or</div>
        <SocialLogin/>
        <p className="">
          Don&apos;t have an account{" "}
          <Link className='text-[#08a5eb]'>signUp</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
