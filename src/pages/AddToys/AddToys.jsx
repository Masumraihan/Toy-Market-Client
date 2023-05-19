import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const [toyName, setToyName] = useState("");
  const [sellerName, setSellerName] = useState(user?.displayName);
  const [sellerEmail, setSellerEmail] = useState(user?.email);
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");

  const handleAddToy = (e) => {
    e.preventDefault();
    if (isNaN(price)) {
      Swal.fire({
        title: "Error!",
        text: "price should be numbe",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    } else if (isNaN(quantity)) {
      Swal.fire({
        title: "Error!",
        text: "quantity should be number",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    const toyInfo = {
      toyName,
      sellerName,
      sellerEmail,
      rating,
      price,
      category,
      quantity,
      picture,
      description,
    };
    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Toy Added Successfully !",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Thank You",
          });
        }
      });
  };

  return (
    <section className='bg-base-200 '>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
        <h2 className='mb-4 text-xl font-bold '>Add a new Toy</h2>
        <form onSubmit={handleAddToy}>
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <div className='sm:col-span-2'>
              <label htmlFor='name' className='block mb-2 text-sm font-medium'>
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
                defaultValue={user?.displayName}
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
                defaultValue={user?.email}
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
    </section>
  );
};

export default AddToys;
