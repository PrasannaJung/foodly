import React from "react";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
}

export default Home;
