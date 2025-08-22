import {  Routes, Route } from "react-router-dom";


import Navbar from "./components/Home/Navbar";


import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import Product from "./components/Pages/Product";
import Productsingle from "./components/Pages/Productsingle";


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
