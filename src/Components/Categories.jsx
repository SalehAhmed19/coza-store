import React from "react";
import { Fade } from "react-reveal";
import card1 from "../Assets/img/card1-img1.jpg";
import card2 from "../Assets/img/card1-img2.jpg";
import card3 from "../Assets/img/card1-img3.jpg";
import "../Styles/Categories.css";

const Categories = () => {
  const data = [
    { _id: 1, title: "Women", subtitle: "Spring 2023", img: card1 },
    { _id: 2, title: "Men", subtitle: "Spring 2023", img: card2 },
    { _id: 3, title: "Accessories", subtitle: "New Trend", img: card3 },
  ];
  return (
    <Fade up>
      <div className="py-20 lg:mx-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
    </Fade>
  );
};

export default Categories;
