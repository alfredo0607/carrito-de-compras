/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "../style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addCarrito,
  eliminarOffCarrito,
  obtenerProdutoAdd,
} from "../actions/productosActions";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Carrito({ setShow }) {
  const [cand, setcand] = useState(1);

  const cart = useSelector((state) => state.cart);

  const { carritos } = cart;

  const productoid = useSelector((state) => state.cart.productoid);

  const dispatch = useDispatch();
  useEffect(() => {
    if (productoid) {
      dispatch(addCarrito(productoid, cand));
      setcand(1);
    }
  }, [dispatch, productoid, cand]);

  const eliminar = (id) => {
    if (id) {
      dispatch(eliminarOffCarrito(id));
    }
  };

  return (
    <div>
      <div className="v">
        {carritos.length === 0
          ? "No hay productos"
          : carritos.map((carrito) => (
              <div>
                <div className="contenedor-carrito" key={carrito.id}>
                  <div className="img-carrito">
                    <img className="b" src={carrito.image} />
                  </div>
                  <div className="txt-carrito">
                    <p className="p-name">{carrito.name}</p>
                    <h5 className="p-price">${carrito.price}</h5>
                    <div>
                      <select
                        className="select-carrito"
                        value={carrito.cantidad}
                        onClick={() => dispatch(obtenerProdutoAdd(carrito))}
                        onChange={(e) => setcand(Number(e.target.value))}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                    <a
                      className="button-carrito"
                      onClick={() => eliminar(carrito.id)}
                    >
                      <AiFillDelete className="logo" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className="contenedor-total">
        <div className="contenedor-p">
          <h3>
            Total ({carritos.reduce((a, c) => a + c.cantidad, 0)} items): $
            {carritos.reduce((a, c) => a + c.price * c.cantidad, 0)}
          </h3>
          <Link to="formulario">
            {carritos.length === 0 ? (
              <button
                className="button-pagar"
                disabled="disabled"
                style={{ opacity: "0.6" }}
              >
                Pagar
              </button>
            ) : (
              <button className="button-pagar" onClick={() => setShow(false)}>
                Pagar
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
