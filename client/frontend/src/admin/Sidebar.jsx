import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return <div className="h-screen bg-orang p-3">
    <ul>
      <li className="text-bolder">
      <NavLink className="font-bold text-white text-xl"  activeClassName="text-black" to="/reservation">Reservation</NavLink>
      </li>
      <li>
      <Link>Reviews</Link>
      </li>
      <li>
      <Link>Customers</Link>
      </li>
    </ul>
  </div>;
};

export default Sidebar;
