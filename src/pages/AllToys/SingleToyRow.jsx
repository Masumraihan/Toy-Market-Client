import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const SingleToyRow = ({ toy, i, loadSingToy }) => {
  const { sellerName, toyName, price, category, quantity, _id } = toy;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    Swal.fire({
      title: "Go To Login Page",
      text: "You have to log in first to view details!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#08a5eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login", { state: location });
      }
    });
  };

  return (
    <tr data-aos='fade-left'>
      <th>{++i}</th>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <>
          {user ? (
            <label
              htmlFor='my-modal-5'
              role='button'
              onClick={() => loadSingToy(_id)}
              className='font-medium text-[#08a5eb] hover:underline'
            >
              Details
            </label>
          ) : (
            <button
              onClick={handleNavigate}
              className='font-medium text-[#08a5eb] hover:underline'
            >
              Details
            </button>
          )}
        </>
      </td>
    </tr>
  );
};

export default SingleToyRow;
