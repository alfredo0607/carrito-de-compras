import React from "react";
import { Col, Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {  obtenerProdutoAdd } from "../actions/productosActions";

export default function Mostrar({ producto }) {
  const dispatch = useDispatch({});

  const addTocard = (productos) => {
    dispatch(obtenerProdutoAdd(productos));
  };

  return (
    <div>
      <div>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={producto.image} />
            <Card.Body>
              <Card.Title>{producto.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem style={{ padding: "3px 3px 3px 20px " }}>
                {producto.category}
              </ListGroupItem>
              <ListGroupItem style={{ padding: "3px 3px 3px 20px " }}>
                {producto.brand}
              </ListGroupItem>
              <ListGroupItem style={{ padding: "3px 3px 3px 20px " }}>
                <b> ${producto.price}</b>
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button
                style={{ width: "100%" }}
                onClick={() => addTocard(producto)}
              >
                Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
}
