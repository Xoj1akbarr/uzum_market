import React from "react";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import { DATA } from "../../static";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Banner />
      <Product data={DATA} />
      <Footer />
    </div>
  );
}

export default Home;
