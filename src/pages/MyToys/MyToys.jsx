import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import ToysRow from "./ToysRow";
import Swal from "sweetalert2";
import UpdateToyModal from "../../components/UpdateToyModal/UpdateToyModal";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const [toyId, setToyId] = useState("");

  const { user } = useContext(AuthContext);

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://learlab-server-assignement.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  const handleUpdateToy = (price, quantity, description) => {
    if (isNaN(price)) {
      console.log("error");
      Swal.fire({
        title: "Error!",
        text: "price should be number",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (isNaN(quantity)) {
      Swal.fire({
        title: "Error!",
        text: "quantity should be number",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    const toyInfo = {
      price,
      quantity,
      description,
    };
    fetch(`https://learlab-server-assignement.vercel.app/toys/${toyId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Your Toy Updated",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Thank You",
          });
          const remaining = myToys.filter((toy) => toy._id !== toyId);
          const updatedToy = myToys.find((toy) => toy._id === toyId);
          updatedToy.price = toyInfo?.price;
          updatedToy.quantity = toyInfo?.quantity;
          updatedToy.description = toyInfo?.description;
          setMyToys([updatedToy, ...remaining]);
        }
      });
  };

  useEffect(() => {
    fetch(
      `https://learlab-server-assignement.vercel.app/myToys?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  return (
    <>
      <div className='my-10 container mx-auto '>
        <div className='md:w-1/2 mx-auto text-center space-y-4 mb-6 px-5 md:px-0'>
          <h1 className='text-center text-4xl font-bold tracking-wide'>
            My Toy Collection: Your Personal Playground
          </h1>
          <p>
            {" "}
            My Toys allows you to curate and organize your very own toy shop.
            Add your favorite toys Discover the joy of building your personal
            toy empire, all in one place.
          </p>
        </div>
        <div>
          {" "}
          <h1
            className={`text-center text-3xl font-bold ${
              myToys.length && "hidden"
            } mb-6 `}
          >
            Please Add Some Toys
          </h1>{" "}
        </div>
        <div className='relative overflow-x-auto sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs bg-base-300 shadow-2xl'>
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
                  Update
                </th>
                <th scope='col' className='px-6 py-3'>
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy, i) => (
                <ToysRow
                  key={toy._id}
                  i={i}
                  toy={toy}
                  handleDeleteToy={handleDeleteToy}
                  setToyId={setToyId}
                />
              ))}
            </tbody>
          </table>
          {/*<!-- Edit toy modal -->*/}
          <UpdateToyModal handleUpdateToy={handleUpdateToy} />
        </div>
      </div>
    </>
  );
};

export default MyToys;
