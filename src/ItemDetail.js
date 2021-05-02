import React, { useState, useEffect} from "react";
import './App.css';


function ItemDetail() {

  useEffect(() => {
    fetchItem();
  },[]);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch('https://fakestoreapi.com/products')
    const item = await fetchItem.json();

    console.log(item);
  };

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default ItemDetail;