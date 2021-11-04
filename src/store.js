import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thuk from "redux-thunk";
import { carritoReducer, productoReducer } from "./reducer/productosReducer";

const initialState = {
  cart: {
    carritos: localStorage.getItem("carritos")
      ? JSON.parse(localStorage.getItem("carritos"))
      : [],
  },

  dataEntrega: localStorage.getItem("dataEntrega")
    ? JSON.parse(localStorage.getItem("dataEntrega"))
    : {},
};

const reducer = combineReducers({
  productos: productoReducer,
  cart: carritoReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thuk))
);

export default store;
