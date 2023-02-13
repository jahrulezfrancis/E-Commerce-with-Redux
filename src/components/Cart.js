import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../store/CartSlice";
import "./Cart.css";

const Cart = () => {
  const quantity = useSelector(state => state.Cart.TotalQuantity)
  const dispatch = useDispatch()
  const ShowCart = () => {
    dispatch(CartAction.setShowCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={ShowCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
