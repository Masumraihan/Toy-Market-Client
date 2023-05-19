import React from "react";

const ToysRow = ({ toy, i, setModalOpen }) => {
  const { sellerName, sellerEmail, picture, toyName, category, price } = toy;
  console.table(toy);
  return (
    <tr className='border-b text-gray-500 bg-base-200'>
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
        <a
          href='#'
          type='button'
          onClick={() => setModalOpen(true)}
          className='font-medium text-[#08a5eb] hover:underline'
        >
          Edit
        </a>
      </td>
      <td>
      <a
          href='#'
          type='button'
          className='font-medium text-[#08a5eb] hover:underline'
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default ToysRow;
