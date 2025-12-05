import React from "react";
import { Link } from "react-router";
import { LuPawPrint } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-2">
          <div className="flex items-center text-2xl font-bold gap-3">
             <LuPawPrint />
          <h2>PawMart</h2>
          </div>
          <p className="max-w-xs leading-relaxed">
            PawMart connects local pet owners and buyers for adoption and pet
            care products.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">USEFUL LINKS</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of use
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">LEGAL</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">FOLLOW US</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter (X)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5 text-sm opacity-70">
        © {new Date().getFullYear()} PawMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
