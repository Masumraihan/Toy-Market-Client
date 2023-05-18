import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProviders";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const { createUser, updateUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    if (!/(?=.*[A-Z])/.test(passwordInput)) {
      setPasswordError(" password must have one uppercase character");
    } else if (!/(?=.*[0-9])/.test(passwordInput)) {
      setPasswordError("password must have one number");
    } else if (!/(?=.*[!@#$%^&*])/.test(passwordInput)) {
      setPasswordError("password must have one special character");
    } else if (passwordInput.length < 6) {
      setPasswordError("password must have six character");
    } else {
      setPasswordError("");
    }
    setPassword(passwordInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser(name, photoUrl)
          .then((result) => {
            console.log(result?.user);
            logOut();
            navigate("/login");
          })
          .catch((err) => {
            setError(err);
          });
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <div className='my-10 mx-5'>
      <h1 className='text-4xl text-center font-bold'>Create Account</h1>
      <form
        onSubmit={handleSubmit}
        className='card-body md:w-2/3 lg:w-1/3 mx-auto border py-10 my-10 rounded-lg'
      >
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPhotoUrl(e.target.value)}
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
            onChange={handlePassword}
          />
          {passwordError && password ? (
            <p className='text-red-400'>{passwordError}</p>
          ) : (
            ""
          )}
          {error ? <p className="text-red-400">{error}</p> : ""}
        </div>
        <div className='form-control mt-6'>
          <button className='btn btn-regular'>Login</button>
        </div>
        <div className='divider'>or</div>
        <SocialLogin />
        <p className=''>
          Don&apos;t have an account{" "}
          <Link to='/login' className='text-[#08a5eb]'>
            login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
