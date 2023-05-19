import { Rating } from "@smastrom/react-rating";
import React from "react";
import "@smastrom/react-rating/style.css";

const ShopCard = ({ toy }) => {
  const { _id, picture, price, rating, toyName } = toy;
  return (
    <div className='w-full rounded-lg shadow bg-base-200'>
      <a href='#'>
        <img className='p-8 rounded-lg h-96 w-full' src={picture} alt='product image' />
      </a>
      <div className='px-5 pb-5 space-y-5'>
        <>
          <h5 className='text-xl text-start font-semibold'>{toyName}</h5>
        </>
        <div className='flex gap-3'>
          <Rating style={{ maxWidth: "100px" }} value={rating} readOnly />
          <span className='font-bold tracking-tighter'>{rating}</span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900 tracking-tighter'>
            ${price}
          </span>
          <a href='#' className='btn btn-regular'>
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
