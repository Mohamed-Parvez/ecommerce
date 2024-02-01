import Hero from "@/components/sections/Hero";
import RentByCategories from "@/components/sections/RentByCategories";
import ShopByCategories from "@/components/sections/ShopByCategories";
import Trending from "@/components/sections/Trending";
import React from "react";

const Page = () => {
  return (
    <main>
      <Hero />
      <Trending />
      <ShopByCategories />
      <RentByCategories />
    </main>
  );
};

export default Page;
