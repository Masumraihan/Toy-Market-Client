import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProviders";
import useTitle from "../../Hooks/UseTitle";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, resetPassword } = useContext(AuthContext);
  useTitle("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        title: "Error!",
        text: "please enter your email",
        icon: "error",
        confirmButtonText: "ok",
      });
      e.target.parentNode.parentNode.parentNode.email.focus();
      return;
    }
    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "please check your email",
          icon: "success",
          confirmButtonText: "ok",
        });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleLogin = (e) => {
    const allToysPath = JSON.parse(localStorage.getItem("pathName"));
    
    e.preventDefault();
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(allToysPath?.pathname || from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className='my-10 mx-5'>
      <h1 className='text-4xl text-center font-bold'>Login</h1>
      <form
        onSubmit={handleLogin}
        className='card-body md:w-2/3 lg:w-1/3 mx-auto border py-10 my-10 rounded-lg'
      >
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className='label'>
            <a
              onClick={handleResetPassword}
              href='#'
              className='label-text-alt link link-hover'
            >
              Forgot password?
            </a>
          </label>
          {error && password ? <p className='text-red-400'>{error}</p> : ""}
        </div>
        <div className='form-control mt-6'>
          <button className='btn btn-regular'>Login</button>
        </div>
        <div className='divider'>or</div>
        <SocialLogin />
        <p className=''>
          Don&apos;t have an account{" "}
          <Link to='/signup' className='text-[#08a5eb]'>
            signUp
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
