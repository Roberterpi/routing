import React, { useState, useEffect} from "react";
import './App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  },[]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products');

    const items = await data.json();
    console.log(items);
  }


  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
}

export default Shop;