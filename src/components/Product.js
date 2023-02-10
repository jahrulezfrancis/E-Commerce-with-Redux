import React from "react";
import { useDispatch, } from "react-redux";
import { CartAction } from "../store/CartSlice";
import "./Product.css";


const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch()

  const AddItem = () => {
    dispatch(CartAction.AddToCart({
      name,
      id,
      price
    }))
  }

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={AddItem}>Add to cart</button>
    </div>
  );
};

export default Product;
