import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { CartAction } from "../store/CartSlice";


const CartItem = ({ name, quantity, total, price, id }) => {

  const dispatch = useDispatch();
  const decreaseCartItem = () => {
    dispatch(
      CartAction.RemoveFromCart(id)
    )
  };

  const increaseCartItem = () => {
    dispatch(
      CartAction.AddToCart({
        id,
        name,
        price,
      })
    );
  };


  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decreaseCartItem}>
        -
      </button>
      <button className="cart-actions" onClick={increaseCartItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
