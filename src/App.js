import React from "react";
import { connect } from "react-redux";
import { Route,Routes } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";
const App = (props) => {
  console.log(props.bookList);
  return (
    <div>
    
      <br/>
      <Routes>
      <Route  path="/" element={<Products/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    bookList : state.bookList
  }
}


export default connect(mapStateToProps)(App);
