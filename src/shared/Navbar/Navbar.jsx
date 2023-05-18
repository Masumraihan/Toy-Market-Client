import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      alert("logout done")
    }).catch(err => {
      console.log(err);
    })
  }

  console.log("nva", user);
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>All Toys</a>
      </li>
      {user && (
        <>
          <li>
            <a>My Toys</a>
          </li>
          <li>
            <a>Add A Toy</a>
          </li>
        </>
      )}
      <li>
        <a>Blogs</a>
      </li>
    </>
  );
  return (
    <>
      <div className='navbar bg-base-100 shadow-sm'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navItems}
            </ul>
          </div>
          <Link to='/'>
            <img
              src='https://i.ibb.co/TMbFKGg/image.png'
              alt=''
              className='w-44 rounded-lg'
            />
          </Link>
          <Link to='/' className='btn btn-ghost font-bold normal-case text-xl'>
            LearnLab
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navItems}</ul>
        </div>
        <div className='navbar-end'>
          {user ? (
            <>
              <div className='avatar'>
                <div className='w-12 mr-5 rounded-full ring ring-[#08a5eb] ring-offset-base-100 ring-offset-2'>
                  <img src={user?.photoURL} />
                </div>
              </div>
              <Link onClick={handleLogOut} className='btn-regular'>
                Logout
              </Link>
            </>
          ) : (
            <Link to="/login" className='btn-regular'>
              login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
