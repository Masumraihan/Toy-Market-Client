import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>All Toys</a>
      </li>
      <li>
        <a>Add A Toy</a>
      </li>
      <li>
        <a>Blogs</a>
      </li>
    </>
  );
  return (
    <>
      <div className='navbar bg-base-100'>
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

          <a className='btn btn-ghost font-bold normal-case text-xl'>LearnLab</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navItems}</ul>
        </div>
        <div className='navbar-end'>
          <div className='avatar'>
            <div className='w-12 mr-5 rounded-full ring ring-[#08a5eb] ring-offset-base-100 ring-offset-2'>
              <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80' />
            </div>
          </div>
          <Link to="/login" className='btn-regular'>Login</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
