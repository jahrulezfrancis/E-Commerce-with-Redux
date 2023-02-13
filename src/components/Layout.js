import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems"
import { useSelector } from "react-redux";


const Layout = () => {
  let total = 0;
  const ShowCart = useSelector((state) => state.Cart.ShowCart)
  const ItemList =useSelector((state) => state.Cart.ItemList)

  ItemList.forEach(item => {
    total += item.totalPrice
  });

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        {ShowCart ? <CartItems /> : null}
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
