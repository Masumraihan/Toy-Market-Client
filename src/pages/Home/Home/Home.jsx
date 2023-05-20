import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Shop from "./Shop/Shop";
import Reviews from "../Reviews/Reviews";
import CustomerCare from "../../CustomerCare/CustomerCare";

const Home = () => {
  return (
    <>
      <Banner />
      <Gallery /> {/*TODO*/}
      <Shop />
      <Reviews />
      <CustomerCare/>
    </>
  );
};

export default Home;
