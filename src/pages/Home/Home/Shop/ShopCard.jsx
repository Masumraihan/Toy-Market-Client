import { Rating } from "@smastrom/react-rating";
import React from "react";
import "@smastrom/react-rating/style.css";

const ShopCard = ({ toy }) => {
  const { _id, picture, price, rating } = toy;
  console.log(toy);
  return (
    <div className='w-full rounded-lg shadow bg-base-200'>
        
      <a href='#'>
        <img className='p-8 rounded-lg' src={picture} alt='product image' />
      </a>
      <div className='px-5 pb-5 space-y-5'>
        <a href='#'>
          <h5 className='text-xl w-5/6 mx-auto font-semibold tracking-tight'>
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex gap-3">
        <Rating style={{ maxWidth: "100px" }} value={rating} readOnly />
        <span className="font-bold">{rating}</span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900'>${price}</span>
          <a href='#' className='btn btn-regular'>
            View Details
          </a>
        </div>

      </div>
    </div>
  );
};

export default ShopCard;
