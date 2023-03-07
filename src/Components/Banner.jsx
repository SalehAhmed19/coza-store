import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Styles/Banner.css";
import img1 from "../Assets/Banner/img1.png";
import img2 from "../Assets/Banner/img2.png";
import img3 from "../Assets/Banner/img3.png";

const Banner = () => {
  const data = [
    { _id: 1, sub: "Men New Season", title: "JACKETS & COATS", img: img1 },
    { _id: 2, sub: "Men's Collection 2023", title: "NEW ARRIVALS", img: img2 },
    { _id: 3, sub: "Women's Collection 2023", title: "NEW SEASON", img: img3 },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider h-screen">
          {data.map((d) => (
            <div className="keen-slider__slide flex flex-col lg:flex-row pt-36 lg:pt-0 justify-between bg-[#E5DFDD]">
              <div className="flex flex-col justify-center h-screen lg:ml-24">
                <h4 className="text-2xl">{d.sub}</h4>
                <h1 className="text-3xl lg:text-6xl font-bold my-5 font-[Playfair]">
                  {d.title}
                </h1>
                <button className="bg-[#717FDF] w-40 p-3 rounded-full text-white font-bold">
                  SHOP NOW
                </button>
              </div>
              <div className="mr-20">
                <img className="w-[465px]" src={d.img} alt="" />
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Banner;
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
