/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function CardPaymen({ item }) {
  return (
    <div>
      <div className="contenedor-1">
        <div>
          <img src={item.image} style={{ width: "12%" }} />
        </div>
      </div>
      <div className="contenedor-2">
        <p>{item.name}</p>
      </div>
      <div className="contenedor-3">{item.category}</div>
      <div className="contenedor-4">{item.price}</div>
    </div>
  );
}
