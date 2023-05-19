import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import SingleToyRow from "./SingleToyRow";
import ToyDetailsModal from "../../components/ToyDetailsModal/ToyDetailsModal";
import { AuthContext } from "../../providers/AuthProviders";

const AllToys = () => {
  const allToys = useLoaderData();
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
  console.log(allToys);

  const getNavigate = () => {
    !user && navigate("/login",{replace:true})
    return
  }

  return (
    <div className="my-10 container mx-auto">
      <div className='w-1/2 mx-auto text-center space-y-4 mb-6 '>
        <h1 className='text-center text-4xl font-bold tracking-wide'>
          All Toys
        </h1>
        <p>
          {" "}
          MyToys allows you to curate and organize your very own toy shop. Add
          your favorite toys Discover the joy of building your personal toy
          empire, all in one place.
        </p>
      </div>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy,i) => (
              <SingleToyRow key={toy._id} toy={toy} i={i} getNavigate={getNavigate} />
            ))}
          </tbody>
        </table>
      </div>
      <ToyDetailsModal/>
    </div>
  );
};

export default AllToys;
