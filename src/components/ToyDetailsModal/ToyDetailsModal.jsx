import React from "react";

const ToyDetailsModal = () => {
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
          hello brother
        </div>
      </div>
    </>
  );
};

export default ToyDetailsModal;
