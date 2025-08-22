import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";


import Navbar from "./components/Home/Navbar";
import React from "react";
import TopSelling from "./components/Topsellingproduct/TopSelling";


import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import Product from "./components/Pages/Product";
import Productsingle from "./components/Pages/Productsingle";
import Faq from "./components/Faq/Faq";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home  />} /> 
         <Route path="/product" element={<Product />} />
         <Route path="/productsingle" element={<Productsingle />} />
      </Routes>
       <Footer />
    </>
  );
}

export default App;
