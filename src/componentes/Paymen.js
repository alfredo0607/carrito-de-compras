/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { PayPalButton } from "react-paypal-button";
import "../style.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Paymen() {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { carritos, dataEntrega } = cart;

  const paypalOtions = {
    clientId:
      "AWbt2EkpDEJv2bkYMr9WYClj5uu9YdOxZJN-0WMNR4GzqItcrY2EcDb458L9Cx2D5lBQBuH97I6d3qqz",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === "COMPLETED") {
      const newOrder = {
        dataEntrega,
        product: cart,
        payment: data,
      };
      console.log(newOrder);
      history.push("/checkout/success");
    }
  };

  const handleSumTotal = () => {
    return 100;
  };

  return (
    <div className="contenedor">
      <div className="contenedor-titulo">
        <h1>Resumen Compra</h1>
      </div>
      <div className="contenedor-informacion">
        <div className="grid">
          <table className="table">
            <tbody>
              <td className="table-th">
                <h4>Image</h4>
              </td>
              <td className="table-th">
                <h4>Nombre</h4>
              </td>
              <td className="table-th">
                <h4>Cantidad</h4>
              </td>
              <td className="table-th">
                <h4>Precio</h4>
              </td>
            </tbody>
            {carritos.map((item) => (
              <tbody>
                <th className="table-th">
                  <img
                    className="img-resumen"
                    src={item.image}
                    style={{ width: "100px" }}
                  />
                </th>
                <th className="table-th">{item.name}</th>
                <th className="table-th">{item.cantidad}</th>
                <th className="table-th">{item.price}</th>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <div className="contenedor-datos">
        <div>
          <h2>Datos de Envio</h2>
          <div className="contenedor-p-data">
            <p>
              <b>Nombre :</b>
              <p className="float">{dataEntrega.nombre}</p>
            </p>

            <p>
              <b>Apellidos :</b>
              <p className="float">{dataEntrega.apellido}</p>
            </p>

            <p>
              <b>Direccion :</b>
              <p className="float">{dataEntrega.direccion}</p>
            </p>

            <p>
              <b>Descripsion :</b>
              <p className="float">{dataEntrega.direccion_decrip}</p>
            </p>

            <p>
              <b>Departamento :</b>
              <p className="float">{dataEntrega.departamento}</p>
            </p>

            <p>
              <b>Ciudad :</b>
              <p className="float">{dataEntrega.ciudad}</p>
            </p>

            <p>
              <b>Codigo Postal :</b>
              <p className="float">{dataEntrega.cp}</p>
            </p>
          </div>
        </div>
      </div>
      <div className="contenedor-pagar">
        <div>
          <h2>
            Total : ({carritos.reduce((a, c) => a + c.cantidad, 0)} items): $
            {carritos.reduce((a, c) => a + c.price * c.cantidad, 0)}
          </h2>
          <div>
            <div>
              <PayPalButton
                paypalOptions={paypalOtions}
                buttonStyle={buttonStyles}
                amount={handleSumTotal()}
                onPaymentStart={() => console.log("Start Payment")}
                onPaymentSuccess={(data) => handlePaymentSuccess(data)}
                onPaymentError={(error) => console.log(error)}
                onPaymentCancel={(data) => console.log(data)}
              ></PayPalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
