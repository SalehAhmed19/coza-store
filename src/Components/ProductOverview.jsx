import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import {
  TfiLayoutGrid4Alt,
  TfiLayoutGrid2Alt,
  TfiLayoutGrid3Alt,
} from "react-icons/tfi";
import img1 from "../Assets/img/product1.webp";
import img2 from "../Assets/img/product2.webp";
import img3 from "../Assets/img/product3.webp";
import img4 from "../Assets/img/product4.webp";
import img5 from "../Assets/img/product5.webp";
import img6 from "../Assets/img/product6.webp";
import img7 from "../Assets/img/product7.webp";
import img8 from "../Assets/img/product8.webp";
import img9 from "../Assets/img/product9.webp";
import img10 from "../Assets/img/product10.webp";
import img11 from "../Assets/img/product11.webp";
import img12 from "../Assets/img/product12.webp";
import img13 from "../Assets/img/product13.webp";
import img14 from "../Assets/img/product14.webp";
import img15 from "../Assets/img/product15.webp";
import img16 from "../Assets/img/product16.webp";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Product from "./Product";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";

const ProductOverview = () => {
  const products = [
    {
      _id: 1,
      img: img1,
      name: "Esprit Ruffle Shirt",
      price: 16.64,
      gender: "f",
    },
    { _id: 2, img: img2, name: "Herschel supply", price: 35.31, gender: "m" },
    { _id: 3, img: img3, name: "Only Check Trouser", price: 25.5, gender: "m" },
    {
      _id: 4,
      img: img4,
      name: "Classic Trench Coat",
      price: 75.0,
      gender: "f",
    },
    {
      _id: 5,
      img: img5,
      name: "Front Pocket Jumper",
      price: 34.75,
      gender: "f",
    },
    {
      _id: 6,
      img: img6,
      name: "Vintage Inspired Classic",
      price: 34.75,
      gender: "na",
    },
    {
      _id: 7,
      img: img7,
      name: "Shirt in Stretch Cotton",
      price: 93.2,
      gender: "f",
    },
    {
      _id: 8,
      img: img8,
      name: "Pieces Metallic Printed",
      price: 52.66,
      gender: "f",
    },
    {
      _id: 9,
      img: img9,
      name: "Converse All Star Hi Plimsolls",
      price: 18.96,
      gender: "na",
    },
    {
      _id: 10,
      img: img10,
      name: "Femme T-Shirt In Stripe",
      price: 75.0,
      gender: "f",
    },
    { _id: 11, img: img11, name: "Herschel supply", price: 63.16, gender: "m" },
    {
      _id: 12,
      img: img12,
      name: "Herschel supply",
      price: 63.15,
      gender: "na",
    },
    {
      _id: 13,
      img: img13,
      name: "T-Shirt with Sleeve",
      price: 25.85,
      gender: "f",
    },
    {
      _id: 14,
      img: img14,
      name: "Pretty Little Thing",
      price: 63.16,
      gender: "f",
    },
    {
      _id: 15,
      img: img15,
      name: "Mini Silver Mesh Watch",
      price: 63.15,
      gender: "na",
    },
    {
      _id: 16,
      img: img16,
      name: "Square Neck Back",
      price: 18.49,
      gender: "f",
    },
  ];
  const [view, setView] = React.useState("col4");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <div className="lg:mx-20 my-10">
      <h1 className="font-bold text-3xl lg:text-4xl">PRODUCT OVERVIEW</h1>
      <div>
        <ToggleButtonGroup
          style={{ margin: "10px 0" }}
          orientation="horizontal"
          value={view}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="col2" aria-label="list">
            <TfiLayoutGrid2Alt />
          </ToggleButton>
          <ToggleButton value="col3" aria-label="list">
            <TfiLayoutGrid3Alt />
          </ToggleButton>
          <ToggleButton value="col4" aria-label="module">
            <TfiLayoutGrid4Alt />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div
        className={
          (view === "col2" &&
            "grid lg:grid-cols-2 grid-cols-1 gap-10 lg:p-5 mx-5") ||
          (view === "col3" &&
            "grid lg:grid-cols-3 grid-cols-1 gap-10 lg:p-5 mx-5") ||
          (view === "col4" &&
            "grid lg:grid-cols-4 grid-cols-1 gap-10 lg:p-5 mx-5")
        }
      >
        {products.map((product) => (
          <Zoom>
            <Link to="/product">
              <Product key={product._id} product={product} />
            </Link>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default ProductOverview;
