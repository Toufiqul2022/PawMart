import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { LuPawPrint, LuLogOut, LuHouse } from "react-icons/lu";
import {
  FiPlusSquare,
  FiList,
  FiShoppingBag,
  FiUser,
  FiClipboard,
  FiSettings,
} from "react-icons/fi";

const Aside = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useAdmin();

  const handleSignOut = () => signOut(auth);

  // 1. Define Links Configuration
  const userLinks = [
    {
      to: "/dashboard/add-listing",
      icon: <FiPlusSquare />,
      label: "Add Listing",
    },
    { to: "/dashboard/my-listing", icon: <FiList />, label: "My Listings" },
    { to: "/dashboard/my-order", icon: <FiShoppingBag />, label: "My Orders" },
  ];

  const adminLinks = [
    {
      to: "/dashboard/all-listing",
      icon: <FiClipboard />,
      label: "All Listings",
    },
    {
      to: "/dashboard/all-order",
      icon: <FiShoppingBag />,
      label: "All Orders",
    },
  ];

  const sharedLinks = [
    { to: "/dashboard/my-profile", icon: <FiUser />, label: "My Profile" },
  ];

  // Helper to render a list of links
  const renderLinks = (links) => {
    return links.map((item) => (
      <li key={item.to}>
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
              isActive
                ? "bg-primary text-primary-content shadow-lg shadow-primary/30 translate-x-1"
                : "text-base-content/70 hover:bg-base-200 hover:text-base-content hover:pl-5"
            }`
          }
        >
          <span className="text-xl">{item.icon}</span>
          {item.label}
        </NavLink>
      </li>
    ));
  };

  return (
    <aside className="w-80 h-screen sticky top-0 bg-base-100 border-r border-base-300 flex flex-col font-sans">
      {/* --- Brand Section --- */}
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

      {/* --- Navigation Menu --- */}
      <nav className="flex-1 px-4 overflow-y-auto custom-scrollbar">
        {/* Main Menu Label */}
        <p className="px-4 text-xs font-bold text-base-content/50 uppercase tracking-wider mb-2 mt-2">
          {adminLoading
            ? "Loading Role..."
            : isAdmin
            ? "Admin Controls"
            : "User Menu"}
        </p>

        <ul className="space-y-2 mb-6">
          {adminLoading ? (
            <div className="flex justify-center py-4">
              <span className="loading loading-spinner loading-md"></span>
            </div>
          ) : isAdmin ? (
            renderLinks(adminLinks)
          ) : (
            renderLinks(userLinks)
          )}
        </ul>

        {/* Account Settings Label */}
        <p className="px-4 text-xs font-bold text-base-content/50 uppercase tracking-wider mb-2">
          Account
        </p>
        <ul className="space-y-2">{renderLinks(sharedLinks)}</ul>
      </nav>

      {/* --- User & Actions Footer --- */}
      <div className="p-4 border-t border-base-300 bg-base-100">
        <div className="bg-base-200/50 p-4 rounded-2xl border border-base-200">
          {/* User Profile Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="profile" />
                ) : (
                  <div className="bg-neutral text-neutral-content w-full h-full flex items-center justify-center font-bold">
                    {user?.displayName?.charAt(0) || "U"}
                  </div>
                )}
              </div>
            </div>
            <div className="overflow-hidden">
              <h4 className="font-bold text-sm truncate">
                {user?.displayName || "User"}
              </h4>
              <div className="flex items-center gap-2">
                {/* Role Badge */}
                <span
                  className={`badge badge-xs font-semibold ${
                    isAdmin ? "badge-error" : "badge-success"
                  }`}
                >
                  {adminLoading ? "Loading..." : isAdmin ? "Admin" : "Member"}

                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              to="/"
              className="btn btn-sm btn-ghost border-base-300 hover:bg-base-300"
              title="Back to Home"
            >
              <LuHouse className="text-lg" />
            </Link>
            <button
              onClick={handleSignOut}
              className="btn btn-sm btn-error btn-outline flex items-center gap-2"
              title="Logout"
            >
              <LuLogOut />
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
