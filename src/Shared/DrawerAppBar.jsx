import React, { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const DrawerAppBar = () => {
  const menuItem = [
    { _id: 1, menu: "Home", route: "#" },
    { _id: 2, menu: "Shop", route: "#about" },
    { _id: 3, menu: "Features", route: "#features" },
    { _id: 4, menu: "About", route: "#about" },
    { _id: 5, menu: "Contact", route: "#contact" },
  ];

  const [active, setActive] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div
      className={
        active
          ? "navbar fixed bg-[#E5DFDD] text-[#000] z-10 px-20"
          : "navbar fixed bg-transparent text-[#000] z-10 px-20"
      }
    >
      <div className="navbar-start p-6">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent rounded-box w-52"
          >
            {menuItem.map((menu) => (
              <li key={menu._id}>
                <a>{menu.menu}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="text-xl">
          <span className="font-bold">COZA </span>
          <span>STORE</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItem.map((menu) => (
            <li key={menu._id}>
              <a>{menu.menu}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="flex items-center">
          Login <BiLogInCircle className="text-xl mx-2" />
        </Link>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="dropdown-content w-52 shadow-lg rounded-md bg-[#E5DFDD]"
        >
          <div className="card-body">
            <span className="">
              <span className="font-bold">Cart Items: </span>
              <span>8</span>
            </span>
            <span>
              <span className="font-bold">Subtotal:</span> $999
            </span>
            <div className="card-actions">
              <button className="bg-[#000] text-[#E5DFDD] w-full p-2 rounded">
                View cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerAppBar;
