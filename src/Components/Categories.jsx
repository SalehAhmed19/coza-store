import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import card1 from "../Assets/img/card1-img1.jpg";
import card2 from "../Assets/img/card1-img2.jpg";
import card3 from "../Assets/img/card1-img3.jpg";
import "../Styles/Categories.css";
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt } from "react-icons/tfi";

const Categories = () => {
  const data = [
    { _id: 1, title: "Women", subtitle: "Spring 2023", img: card1 },
    { _id: 2, title: "Men", subtitle: "Spring 2023", img: card2 },
    { _id: 3, title: "Accessories", subtitle: "New Trend", img: card3 },
  ];
  const [view, setView] = React.useState("col3");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <div className="py-20 lg:mx-20">
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
        <ToggleButton value="col3" aria-label="module">
          <TfiLayoutGrid3Alt />
        </ToggleButton>
      </ToggleButtonGroup>
      <div
        className={
          (view === "col2" && "grid grid-cols-2 gap-5") ||
          (view === "col3" && "grid grid-cols-3 gap-5")
        }
      >
        {data.map((d) => (
          <div
            className="border flex justify-between c-card relative"
            key={d._id}
          >
            <div className="pl-7 pt-7">
              <h2 className="text-3xl font-bold my-2">{d.title}</h2>
              <h4>{d.subtitle}</h4>
              <button className="hover-button absolute bottom-5 underline">
                Shop Now
              </button>
            </div>
            <div>
              <img className=" w-60" src={d.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
