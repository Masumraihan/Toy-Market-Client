import { Rating } from "@smastrom/react-rating";
import React from "react";

const ToyDetailsModal = ({ singleToy }) => {
  const {
    picture,
    sellerName,
    sellerEmail,
    quantity,
    price,
    toyName,
    description,
    rating,
  } = singleToy;
  console.log(singleToy);
  return (
    <>
      <input type='checkbox' id='my-modal-5' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative w-11/12 p-12 max-w-5xl'>
          <label
            htmlFor='my-modal-5'
            className='btn bg-[#08a5eb] hover:bg-[#08a5eb] border-none ring-2 ring-white btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <div className='hero h-full bg-base-200'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
              <div>
                <img src={picture} className='max-w-full rounded-lg shadow-2xl' />
                
              </div>
              <div>
                <h1 className='text-4xl font-bold'>{toyName}</h1>
                <p className='py-6'>{description}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p>
                      Price :{" "}
                      <span className='font-semibold text-xl'>${price}</span>
                    </p>
                    <p>Available Quantity : {quantity}</p>
                  </div>
                  <Rating style={{ maxWidth: 100 }} value={3} readOnly />
                </div>
                <div className='divider'></div>
                <div>
                  <h3 className='font-semibold'>Seller Name : {sellerName}</h3>
                  <h4 className='font-semibold'>
                    Seller Contact :{" "}
                    <span className='text-sm text-gray-500'>{sellerEmail}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetailsModal;
