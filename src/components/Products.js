import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sepeteEkle } from "../actions";

const Products = props => {
  return (
    <>
    <div className="header">
    <h2 className="header-title">
        <span>Kitap Listesi - </span>
        <Link to="/cart">Sepetim</Link>
      </h2>
    </div>
    <div className="bookListContainer col-lg-12">
     
     
        {
          props.bookList.map(book => (
            <div className="book ">
              <img className="img"
                src={book.image}
                alt={book.name}
              />
              <div>
                <h4>{book.name}</h4>
                <p>Yazar: {book.author}</p>
                <p>Fiyat: &#8378; {book.price}</p>
                <button className="btn btn-light add-button" onClick={() => props.sepeteEkle(book)}>Sepete Ekle</button>
              </div>
            </div>
          ))
        }



    </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    bookList: state.bookList
  }
}




export default connect(mapStateToProps, { sepeteEkle })(Products);
