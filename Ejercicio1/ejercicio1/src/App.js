import React from "react";
import "./App.css";
import productsData from "./components/productsData";
import ProductCard from "./components/ProductCard";

const App = () => {
  const product = productsData.map(product => (
    <ProductCard info={product} key={product.id} />
  ));

  return <div>{product}</div>;
};

export default App;
