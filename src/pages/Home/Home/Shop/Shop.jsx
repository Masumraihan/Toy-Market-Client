import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCard from "./ShopCard";
import { ClipLoader } from "react-spinners";

const Shop = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Math");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/toys?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, [category]);

  

  return (
    <div className='container mx-auto text-center my-20'>
        <h1 className="text-4xl text-center font-bold mb-10">Shop by category</h1>
      <Tabs>
        <TabList>
          <Tab style={{color:"#08a5eb"}} onClick={() => setCategory("Math")}>Math Toys</Tab>
          <Tab style={{color:"#08a5eb"}} onClick={() => setCategory("Science")}>Science Toys</Tab>
          <Tab style={{color:"#08a5eb"}} onClick={() => setCategory("Engineer")}>Engineer Toys</Tab>
        </TabList>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {toys.map((toy) => (
            <ShopCard key={toy._id} toy={toy} />
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default Shop;
