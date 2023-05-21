import React from "react";

const ToysRow = ({ toy, i, handleDeleteToy, setToyId }) => {
  const { _id, sellerName, sellerEmail, picture, toyName, category, price } =
    toy;
  return (
    <tr data-aos="fade-right" className='border-b text-gray-500 bg-base-200'>
      <td className='w-4 font-bold p-4'>{++i}</td>
      <td className='flex items-center justify-center py-4 text-gray-900 whitespace-nowrap'>
        <img
          className='w-16 h-16 rounded-full'
          src={picture}
          alt={sellerName}
        />
        <div className='pl-3'>
          <div className='text-base font-semibold'>{sellerName}</div>
          <div className='font-normal text-gray-500'>{sellerEmail}</div>
        </div>
      </td>
      <td className='px-6 py-4'>{toyName}</td>
      <td className='px-6 py-4'>{category}</td>
      <td className='px-6 py-4'>${price}</td>
      <td className='px-6 py-4'>
        <label
          role='button'
          htmlFor='my-modal-5'
          onClick={() => setToyId(_id)}
          className='font-medium text-[#08a5eb] hover:underline'
        >
          Edit
        </label>
      </td>
      <td>
        <a
          role='button'
          className='font-medium text-[#08a5eb] hover:underline'
          onClick={() => handleDeleteToy(_id)}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default ToysRow;
