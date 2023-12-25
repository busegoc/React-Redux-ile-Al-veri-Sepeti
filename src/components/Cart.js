import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../style.css"
import { decreaseQuantity, removeFromCart, increaseQuantity } from "../actions"; 



const Cart = (props) => {
  const totalPrice = props.cart.reduce((total, item) => (total += item.price), 0)

  return (
    <div>
      <div className="header">

        <h2>
          <Link to="/">Kitap Listesi</Link> <span>- Sepetim</span>
        </h2>
      </div>
      <div className="header-cart">
        <h3>Toplam Sepet Tutarı: &#8378;{totalPrice.toFixed(2)}</h3>

      </div> 

      <div className="bookListContainer col-lg-12">

        {
          props.cart.map(book => (
            <div className="book">
              <img
                src={book.image}
                alt={book.name}
              />
              <div>
                <h4>{book.name}</h4>
                <p>Yazar: {book.author}</p>
                <p>Fiyat: &#8378;{book.price}</p>

                <button onClick={() =>  props.decreaseQuantity(book.id)}>-</button>
                <button onClick={() => props.removeFromCart(book.id)}>Sepetten Çıkar</button>
                <button onClick={() => props.increaseQuantity(book.id)}>+</button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  );
};
const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}
const mapDispatchToProps = {
  decreaseQuantity,
  removeFromCart,
  increaseQuantity,
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
