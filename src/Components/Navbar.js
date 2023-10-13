import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex items-center justify-center p-[1%] bg-metal text-xl font-bold">
      <li className="mx-[1%]">
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li className="mx-[1%]">
        <Link className="link" to="/blog">
          Blog
        </Link>
      </li>
      <li className="mx-[1%]">
        <Link className="link" to="/contact">
          Contact Us
        </Link>
      </li>
      <li cclassName="mx-[1%]">
        <Link className="link" to="/about">
          About Us
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
