import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import ToysRow from "./ToysRow";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const [toyName, setToyName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const { user } = useContext(AuthContext);

  const handleCloseModal = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/myToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);
  console.log(myToys);

  return (
    <>
      <div className='my-10 container mx-auto '>
        <div className='flex flex-col text-center space-y-4 mb-6 '>
          <h1 className='text-center text-4xl font-bold tracking-tight'>
            My Toys
          </h1>
          <span className='h-2 w-24 bg-[#08a5eb]'></span>
        </div>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs bg-base-300'>
              <tr>
                <th scope='col' className='p-4'>
                  No.
                </th>
                <th scope='col' className='px-6 py-3 text-center'>
                  Seller Info
                </th>
                <th scope='col' className='px-6 py-3'>
                  Toy Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Category
                </th>
                <th scope='col' className='px-6 py-3'>
                  Price
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action2
                </th>
              </tr>
              
            </thead>
            <tbody>
              {myToys.map((toy, i) => (
                <ToysRow
                  key={toy._id}
                  i={i}
                  toy={toy}
                  setModalOpen={setModalOpen}
                />
              ))}
            </tbody>
          </table>
          {/*<!-- Edit user modal -->*/}
          <div
            id='editUserModal'
            tabindex='-1'
            aria-hidden='true'
            className={` fixed z-50 items-center  justify-center w-full p-4 ${
              modalOpen ? "" : "hidden"
            } overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full`}
          >
            <div className='relative ml-[50%] top-0 -translate-x-1/2 bg-base-300 p-12 rounded-lg w-full max-w-2xl'>
              {/*<!-- Modal content -->*/}
              <button
                onClick={handleCloseModal}
                className='btn btn-ghost text-2xl absolute top-0 right-0'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
              <form className=' rounded'>
                <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='name'
                      className='block mb-2 text-sm font-medium'
                    >
                      Toy Name
                    </label>
                    <input
                      type='text'
                      name='toyName'
                      id='toyName'
                      className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#08a5eb] focus:border-[#08a5eb] block w-full p-2.5 '
                      placeholder='Toy name'
                      required
                      onChange={(e) => setToyName(e.target.value)}
                    />
                  </div>
                  <div className=''>
                    <label
                      htmlFor='sellerName'
                      className='block mb-2 text-sm font-medium'
                    >
                      Seller Name
                    </label>
                    <input
                      type='text'
                      name='sellerName'
                      id='sellerName'
                      className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#08a5eb] focus:border-[#08a5eb] block w-full p-2.5 '
                      placeholder='Seller Name'
                      required
                      onChange={(e) => setSellerName(e.target.value)}
                    />
                  </div>
                  <div className=''>
                    <label
                      htmlFor='sellerEmail'
                      className='block mb-2 text-sm font-medium'
                    >
                      Seller Email
                    </label>
                    <input
                      type='email'
                      name='sellerEmail'
                      id='sellerEmail'
                      className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#08a5eb] focus:border-[#08a5eb] block w-full p-2.5 '
                      placeholder='Seller Email'
                      required
                      onChange={(e) => setSellerEmail(e.target.value)}
                    />
                  </div>
                  <div className='w-full'>
                    <label
                      htmlFor='rating'
                      className='block mb-2 text-sm font-medium '
                    >
                      Rating
                    </label>
                    <input
                      type='number'
                      max={5}
                      min={0}
                      name='rating'
                      id='rating'
                      className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#08a5eb]  block w-full p-2.5 '
                      placeholder='Toy Rating'
                      required
                      onChange={(e) => setRating(e.target.value)}
                    />
                  </div>
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
                      htmlFor='category'
                      className='block mb-2 text-sm font-medium '
                    >
                      Category
                    </label>
                    <select
                      id='category'
                      name='category'
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#08a5eb] focus:border-[#08a5eb] block w-full p-2.5'
                    >
                      <option value=''>Select category</option>
                      <option value='Science'>Science</option>
                      <option value='Math'>Math</option>
                      <option value='Engineer'>Engineer</option>
                    </select>
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
                      htmlFor='image-url'
                      className='block mb-2 text-sm font-medium '
                    >
                      Picture Url
                    </label>
                    <input
                      type='url'
                      name='imageUrl'
                      id='image-url'
                      onChange={(e) => setPicture(e.target.value)}
                      className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#08a5eb] focus:border-[#08a5eb] block w-full p-2.5 '
                      placeholder='Picture Url'
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
                <button type='submit' className='btn-regular mt-5'>
                  Add Toy
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyToys;
