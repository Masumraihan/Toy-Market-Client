import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Shop = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Math");
  useEffect(() => {
    fetch(`http://localhost:5000/toys?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [category]);

  console.log(toys);

  return (
    <div className='container mx-auto text-center'>
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory("Math")}>Math Toys</Tab>
          <Tab onClick={() => setCategory("Science")}>Science Toys</Tab>
          <Tab onClick={() => setCategory("Engineer")}>Engineer Toys</Tab>
        </TabList>
        hello
      </Tabs>
    </div>
  );
};

export default Shop;
