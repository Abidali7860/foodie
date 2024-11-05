import React, { useState } from "react";

import Navbar from "./component/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./component/Product";
import About from "./component/Review";

import Contact from "./component/Contact";
import ProductDetails from "./component/ProductDetails";
import Cart from "./component/Cart";
import { Data } from "./component/Data";
import Error from "./component/Error";
import Footer from "./component/Footer";

export default function App() {
  const [Item, setItem] = useState([...Data]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Navbar cart={cart} />
        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setCart={setCart} Data={Item} />}
          />
          <Route path="/review" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="product/:title"
            element={<ProductDetails cart={cart} setCart={setCart} />}
          />
          <Route path="*" element={<Error />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
