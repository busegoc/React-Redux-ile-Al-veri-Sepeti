import { data } from "../data";

const INITIAL_STATE = {
  bookList: data,
  cart: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEPETE_EKLE":
      const existingItem = state.cart.find(item => item.id === action.payload.book.id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.book.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload.book, quantity: action.payload.quantity }],
        };
      }

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.productId
            ? { ...item, price: Math.max((item.price || 0) - item.value, 0) }
            : item
        ),
      };
    
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.productId
            ? { ...item, price: (item.price || 0) + item.value }
            : item
        ),
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.productId),
      };

    default:
      return state;
  }
};
