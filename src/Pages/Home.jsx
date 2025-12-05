import React from "react";
import Slider from "../components/Slider";
import Category from "./Category";
import AdoptPets from "../components/AdoptPets";
import PetHero from "../components/PetHero";
import RecentListing from "../components/RecentListing";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Category></Category>
      <RecentListing></RecentListing>
      <AdoptPets></AdoptPets>
      <PetHero></PetHero>
    </div>
  );
};

export default Home;
