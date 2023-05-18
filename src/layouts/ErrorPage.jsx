import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error, status } = useRouteError();
  return (
    <div>
      <Player
        autoplay
        loop
        src='https://assets3.lottiefiles.com/packages/lf20_suhe7qtm.json'
        style={{ height: "300px", width: "300px" }}
      ></Player>
      <p className='text-center text-red-400 text-xl'>
        {error?.message || status}
      </p>
      <div className="text-center mt-10">
      <Link to="/" className="btn-regular w-60">Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
