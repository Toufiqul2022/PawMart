import React from "react";
import Slider from "../components/Slider";
import Category from "./Category";
import AdoptPets from "../components/AdoptPets";
import PetHero from "../components/PetHero";
import RecentListing from "../components/RecentListing";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 overflow-hidden px-5 md:px-10 py-10">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 space-y-10">
        <Slider />
        <Category />
        <RecentListing />
        <AdoptPets />
        <PetHero />
      </div>
    </div>
  );
};

export default Home;
