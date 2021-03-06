import React, { useState, useEffect} from "react";
import './App.css';


function ItemDetail({ match }) {

  useEffect(() => {
    fetchItem();
  },[]);

  const [item, setItem] = useState({
    images: {};
  });

  const fetchItem = async () => {
    const fetchItem = await fetch('https://fakestoreapi.com/products=${match.params.id}')
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>Item</h1>
      <img src={item.images.transparent} alt=""/>
    </div>
  );
}

export default ItemDetail;