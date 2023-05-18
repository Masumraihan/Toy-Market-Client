import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation()
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogIn()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div
      onClick={handleGoogleLogin}
      className='border-2 mb-3 p-3 rounded-full flex flex-col items-center gap-2 '
      role='button'
    >
      <div className='flex items-center gap-2'>
        <FcGoogle className='text-3xl' />
        <p>Login With Google</p>
      </div>
    </div>
  );
};

export default SocialLogin;
