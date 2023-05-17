import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const SignUp = () => {
    return (
        <div className='my-10 mx-5'>
      <h1 className='text-4xl text-center font-bold'>Create Account</h1>
      <div className='card-body md:w-2/3 lg:w-1/3 mx-auto border py-10 my-10 rounded-lg'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            placeholder='name'
            className='input input-bordered'
            name='name'
            required
          />
        </div>
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
            <span className='label-text'>Photo Url</span>
          </label>
          <input
            type='url'
            placeholder='photo url'
            className='input input-bordered'
            name='photo'
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
        </div>
        <div className='form-control mt-6'>
          <button className='btn btn-regular'>Login</button>
        </div>
        <div className="divider">or</div>
        <SocialLogin/>
        <p className="">
          Don&apos;t have an account{" "}
          <Link to="/login" className='text-[#08a5eb]'>login</Link>{" "}
        </p>
      </div>
    </div>
    );
};

export default SignUp;