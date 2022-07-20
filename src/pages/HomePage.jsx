import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newslettere from "../components/Newslettere";
import Products from "../components/Products";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newslettere />
      <Footer />
    </div>
  );
};

export default HomePage;
