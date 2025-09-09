import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black h-screen w-48">
      <img src="../../../public/vite.svg" />
      <hr className="bg-blue-700 h-10" />

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Support Tickets</a>
        </li>
        <li>
          <a href="#">Incidents</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Orders</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
