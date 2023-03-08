import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Product = ({ product }) => {
  return (
    <div>
      <img src={product.img} alt="" />
      <div className="flex justify-between items-center">
        <div>
          <h4 className="my-2 text-[#999999]">{product.name}</h4>
          <p className="text-[#666666]">${product.price}</p>
        </div>
        <label className="swap">
          <input type="checkbox" />
          <div className="swap-on">
            <AiFillHeart />
          </div>
          <div className="swap-off">
            <AiOutlineHeart />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Product;
