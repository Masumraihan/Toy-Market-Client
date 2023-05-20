import { Rating } from "@smastrom/react-rating";
import React, { useContext } from "react";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../../../../providers/AuthProviders";
import { Link } from "react-router-dom";

const ShopCard = ({ toy, getSingleToy }) => {
  const { _id, picture, price, rating, toyName } = toy;
  const { user } = useContext(AuthContext);
  return (
    <div className='w-full rounded-lg shadow p-8 bg-base-200'>
      <img
        className=' h-96  w-full rounded-lg hover:scale-105  transition-transform'
        src={picture}
        alt='product image'
      />
      <div className=' py-5 space-y-5'>
        <div className='flex items-center justify-between my-5'>
          <h5 className='text-2xl text-start font-semibold'>{toyName}</h5>
          <div className='flex gap-3'>
            <span className=' text-sm tracking-wide text-[#08a5eb]'>
              Rating:
            </span>
            <Rating style={{ maxWidth: "100px" }} value={rating} readOnly />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900 tracking-tighter'>
            Price : ${price}
          </span>
          {user ? (
            <label
              htmlFor='my-modal-5'
              role='button'
              onClick={() => getSingleToy(toy)}
              className='btn btn-regular'
            >
              View Details
            </label>
          ) : (
            <Link to="/login" className='btn btn-regular'>View Details</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
