import { Rating } from "@smastrom/react-rating";
import React from "react";
import "@smastrom/react-rating/style.css";

const ShopCard = ({ toy, getSingleToy }) => {
  const { _id, picture, price, rating, toyName } = toy;
  return (
    <div className='w-full rounded-lg shadow bg-base-200'>
      <a href='#'>
        <img
          className='p-8 rounded-lg h-96 w-full'
          src={picture}
          alt='product image'
        />
      </a>
      <div className='px-5 pb-5 space-y-5'>
        <div className='flex items-center justify-between mb-10'>
          <h5 className='text-xl text-start font-semibold'>{toyName}</h5>
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
          <label
            htmlFor='my-modal-5'
            role='button'
            onClick={() => getSingleToy(toy)}
            className='btn btn-regular'
          >
            View Details
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
