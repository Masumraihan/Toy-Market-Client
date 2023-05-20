import React, { useEffect, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const CustomerCare = () => {
  const [cares, setCares] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cares/")
      .then((res) => res.json())
      .then((data) => {
        setCares(data);
      });
  }, []);
  return (
    <div className='container mx-auto px-3 md:px-0 my-10'>
      <div className='divider text-gray-400'>Customer Cares</div>
      <h1 className='text-center text-4xl font-bold tracking-wide mb-6'>
        Support & Contact
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {cares.map((care) => (
          <div key={care._id} className='card p-8 border bg-base-100'>
            <figure>
              <img src={care.image} alt={care.careType} />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{care.careType}</h2>
              <p>{care.details}</p>
              <div className='card-actions items-center mt-3'>
                <button className=' text-[#08a5eb]'>{care.link}</button>
                <HiArrowLongRight className="text-2xl"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerCare;
