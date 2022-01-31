import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <br />
      <Link to="#" className="link">
        <img
          src="https://res.cloudinary.com/girengri/image/upload/v1643649493/1200px-Star_Wars_Logo.svg_prn4bo.png"
          alt="logo"
          width="200"
          className="imagen"
        />
      </Link>
      <br />
    </div>
  );
};
