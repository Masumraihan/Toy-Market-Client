import React from "react";

const SingleToyRow = ({ toy, i,getNavigate }) => {
  const { sellerName, toyName, price, category, quantity, _id } = toy;
  return (
    <tr>
      <th>{++i}</th>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <>
          <label
            htmlFor='my-modal-5'
            role='button'
            onClick={getNavigate}
            className='font-medium text-[#08a5eb] hover:underline'
          >
            Details
          </label>
        </>
      </td>
    </tr>
  );
};

export default SingleToyRow;
