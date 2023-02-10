import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.Cart.ItemList)
  console.log(cartItems)

  return (
    <div className="App">
      {!isLoggedIn ? <Auth /> : null}
      {isLoggedIn ? <Layout /> : null}
    </div>
  );
}

export default App;
