import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { LuPawPrint } from "react-icons/lu";


const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth);
  };

  const publicLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Pets & Supplies</NavLink>
      </li>
    </>
  );

  const privateLinks = (
    <>
      <li>
        <NavLink to="/add-services">Add Listing</NavLink>
      </li>
      <li>
        <NavLink to="/my-services">My Listings</NavLink>
      </li>
      <li>
        <NavLink to="/my-orders">My Orders</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {publicLinks}
            {user && privateLinks}
          </ul>
        </div>

        <Link to="/" className=" flex items-center gap-3 text-2xl font-bold">
          <LuPawPrint /> PawMart
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {publicLinks}
          {user && privateLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            LogOut
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
