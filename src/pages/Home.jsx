import React from "react";
import Navbar from "../components/Navbar.jsx";
import Main from "../components/main.jsx";         // lowercase 'main'
import Product from "../components/Products.jsx";  // correct file name
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <Footer />
    </>
  );
}

export default Home;
