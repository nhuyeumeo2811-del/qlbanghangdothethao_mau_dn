import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DetailProduct from './components/Products/DetailProduct';
import ProductList from "./components/Products/ProductList";
import ProductCard from "./components/Products/ProductCard";
import Cart from "./components/Pages/Cart";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
