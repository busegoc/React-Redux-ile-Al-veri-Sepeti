export const sepeteEkle = (book, quantity = 1) => {
    return {
      type: "SEPETE_EKLE",
      payload: { book, quantity },
    };
  };
  

export const decreaseQuantity = (productId) => {
    return {
      type: 'DECREASE_QUANTITY',
      payload: { productId },
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: { productId },
    };
  };
  
  export const increaseQuantity = (productId) => {
    return {
      type: 'INCREASE_QUANTITY',
      payload: { productId },
    };
  };
  