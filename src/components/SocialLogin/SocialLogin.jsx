import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className='border-2 mb-3 p-3 rounded-full flex flex-col items-center gap-2 ' role="button">
      <div className='flex items-center gap-2'>
        <FcGoogle className='text-3xl' />
        <p>Login With Google</p>
      </div>
    </div>
  );
};

export default SocialLogin;
