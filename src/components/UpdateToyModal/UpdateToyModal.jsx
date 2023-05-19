import React, { useState } from "react";
import Swal from "sweetalert2";

const UpdateToyModal = ({ handleUpdateToy }) => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!price || !quantity || !description) {
      Swal.fire({
        title: "Error!",
        text: "Please Fill Your Information",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return
    }
    handleUpdateToy(price, quantity, description);
  };

  return (
    <>
      <input type='checkbox' id='my-modal-5' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative w-11/12 max-w-5xl'>
          <label
            htmlFor='my-modal-5'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <form className=' rounded'>
            <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
              <div className='w-full'>
                <label
                  htmlFor='price'
                  className='block mb-2 text-sm font-medium '
                >
                  Price
                </label>
                <input
                  type='text'
                  name='price'
                  id='price'
                  className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#08a5eb] focus:border-[#08a5eb] block w-full p-2.5 '
                  placeholder='$'
                  required
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <label
                  htmlFor='quantity'
                  className='block mb-2 text-sm font-medium '
                >
                  Available Quantity
                </label>
                <input
                  type='text'
                  name='quantity'
                  id='quantity'
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#08a5eb] focus:border-[#08a5eb] block w-full p-2.5 '
                  placeholder='Available Quantity'
                  required
                />
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='description'
                  className='block mb-2 text-sm font-medium '
                >
                  Description
                </label>
                <textarea
                  id='description'
                  name='description'
                  onChange={(e) => setDescription(e.target.value)}
                  rows='8'
                  className='block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#08a5eb] focus:border-[#08a5eb] '
                  placeholder='Your description here'
                ></textarea>
              </div>
            </div>
            <button
              onClick={handleUpdate}
              type='submit'
              className='btn-regular mt-5'
            >
              Update Toy
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateToyModal;
