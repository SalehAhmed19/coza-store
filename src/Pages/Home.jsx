import React from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import ProductOverview from "../Components/ProductOverview";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <ProductOverview />
    </div>
  );
};

export default Home;
