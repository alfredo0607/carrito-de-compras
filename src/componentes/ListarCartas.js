import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Mostrar from "./Mostrar";
import { Row, Container } from "react-bootstrap";

export default function ListarCartas() {
  const productos = useSelector((state) => state.productos.productos);

  return (
    <Fragment>
      <Container style={{ margin: "3rem auto" }}>
        <Row xs={1} md={3} className="g-4">
          {productos.map((producto) => (
            <Mostrar key={producto.id} producto={producto} />
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}
