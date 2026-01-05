import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"; // ✅ FIXED HERE
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { LuPawPrint } from "react-icons/lu";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const handleSignOut = () => signOut(auth);

  const publicLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Pets & Supplies</NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
      <li>
        <NavLink to="/cta">CTA</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics </NavLink>
      </li>
      <li>
        <NavLink to="/highlights">Highlights </NavLink>
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
    <div className="navbar bg-base-200 shadow-sm px-10">
      <div className="navbar-start">
        {/* Mobile Menu */}
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

        <div className="p-6">
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-primary transition-opacity hover:opacity-80"
          >
            <div className="p-2 bg-primary/10 rounded-xl">
              <LuPawPrint className="text-3xl" />
            </div>
            <span>PawMart</span>
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {publicLinks}
          {user && privateLinks}
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end gap-3 flex items-center">
        {/* Theme Toggle */}
        <label className="flex cursor-pointer gap-2 items-center">
          <svg
            width="22"
            height="22"
            fill="currentColor"
            className={`${theme === "light" ? "opacity-100" : "opacity-40"}`}
          >
            <circle cx="12" cy="12" r="5" />
          </svg>

          <input
            type="checkbox"
            className="toggle"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />

          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`${theme === "dark" ? "opacity-100" : "opacity-40"}`}
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
          </svg>
        </label>

        {/* User Avatar */}
        {user && (
          <Link to="/my-profile" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border">
              {user.photoURL ? (
                <img src={user.photoURL} alt="profile" />
              ) : (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center font-bold text-black">
                  {user?.displayName?.charAt(0) || "U"}
                </div>
              )}
            </div>
          </Link>
        )}

        {/* Auth Buttons */}
        {user ? (
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-3 w-64 flex gap-2"
          >
            <Link to="/dashboard" className="btn flex-1">
              Dashboard
            </Link>

            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-error flex-1"
            >
              Logout
            </button>
          </ul>
        ) : (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
