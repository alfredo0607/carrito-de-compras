import React, { useState } from "react";
import { Form, Button, Row, Container } from "react-bootstrap";
import "../style.css";
import { useDispatch } from "react-redux";
import { dataPedido } from "../actions/productosActions";
import { useHistory } from "react-router-dom";
import Mensaje from "./Mensaje";
export default function FormPedido() {
  const dispatch = useDispatch();
  const History = useHistory();
  const [datosEntrega, setdatosEntrega] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    direccion_decrip: "",
    ciudad: "",
    departamento: "",
    cp: "",
  });

  const [error, seterror] = useState(false);

  const {
    nombre,
    apellido,
    direccion,
    direccion_decrip,
    ciudad,
    departamento,
    cp,
  } = datosEntrega;

  const tomarDatos = (e) => {
    setdatosEntrega({
      ...datosEntrega,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      direccion.trim() === "" ||
      direccion_decrip.trim() === "" ||
      ciudad.trim() === "" ||
      departamento.trim() === "" ||
      cp.trim() === ""
    ) {
      seterror(true);
      return;
    }

    seterror(false);

    dispatch(dataPedido(datosEntrega));
    History.push("/formulario/paymen");
  };

  return (
    <Container className="justify-content-md-center">
      {error ? (
        <Mensaje variant="danger">
          {"todos los campos deben estar llenos "}
        </Mensaje>
      ) : null}
      <Form onSubmit={enviarDatos}>
        <Row className="mb-3">
          <Form.Group className="fort" controlId="formGridEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Ingresa tu Nombre"
              onChange={tomarDatos}
              value={nombre}
            />
          </Form.Group>

          <Form.Group className="fort" controlId="formGridPassword">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              placeholder="Ingresa tus Apellidos"
              onChange={tomarDatos}
              value={apellido}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Direccion</Form.Label>
          <Form.Control
            name="direccion"
            placeholder="Eje: carrera 19 #25-23"
            onChange={tomarDatos}
            value={direccion}
          />
        </Form.Group>

        <Form.Group className="fort">
          <Form.Label>Apartment, studio, or floor</Form.Label>
          <Form.Control
            name="direccion_decrip"
            placeholder="Apartment, studio, or floor"
            onChange={tomarDatos}
            value={direccion_decrip}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group className="fort">
            <Form.Label>Ciudad</Form.Label>
            <Form.Select name="ciudad" onChange={tomarDatos} value={ciudad}>
              <option value="">-- Seleccione --</option>
              <option value="Arauca">Arauca</option>
              <option value="Armenia">Armenia</option>
              <option value="Barranquilla">Barranquilla</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Bucaramanga">Bucaramanga</option>
              <option value="Cali">Cali</option>
              <option value="Cartagena">Cartagena</option>
              <option value="Cúcuta">Cúcuta</option>
              <option value="Florencia">Florencia</option>
              <option value="Ibagué">Ibagué</option>
              <option value="Leticia">Leticia</option>
              <option value="Manizales">Manizales</option>
              <option value="Medellín">Medellín</option>
              <option value="Mitú">Mitú</option>
              <option value="Mocoa">Mocoa</option>
              <option value="Montería">Montería</option>
              <option value="Neiva">Neiva</option>
              <option value="Pasto">Pasto</option>
              <option value="Pereira">Pereira</option>
              <option value="Popayán">Popayán</option>
              <option value="Puerto Carreño">Puerto Carreño</option>
              <option value="Puerto Inírida">Puerto Inírida</option>
              <option value="Quibdó">Quibdó</option>
              <option value="Riohacha">Riohacha</option>
              <option value="San Andrés">San Andrés</option>
              <option value="San José del Guaviare">
                San José del Guaviare
              </option>
              <option value="Santa Marta">Santa Marta</option>
              <option value="Sincelejo">Sincelejo</option>
              <option value="Tunja">Tunja</option>
              <option value="Valledupar">Valledupar</option>
              <option value="Villavicencio">Villavicencio</option>
              <option value="Yopal">Yopal</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="fort">
            <Form.Label>Departamento</Form.Label>
            <Form.Select
              // defaultValue="-- Seleccione --"
              name="departamento"
              onChange={tomarDatos}
              value={departamento}
            >
              <option value=""> -- Seleccione -- </option>
              <option value="Amazonas">Amazonas</option>
              <option value="Antioquia">Antioquia</option>
              <option value="Arauca">Arauca</option>
              <option value="Atlántico">Atlántico</option>
              <option value="Bolívar">Bolívar</option>
              <option value="Boyacá">Boyacá</option>
              <option value="Caldas">Caldas</option>
              <option value="Caquetá">Caquetá</option>
              <option value="Casanare">Casanare</option>
              <option value="Cauca">Cauca</option>
              <option value="Cesar">Cesar</option>
              <option value="Chocó">Chocó</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Cundinamarca">Cundinamarca</option>
              <option value="Guainía">Guainía</option>
              <option value="Guaviare">Guaviare</option>
              <option value="Huila">Huila</option>
              <option value="La Guajira">La Guajira</option>
              <option value="Magdalena">Magdalena</option>
              <option value="Meta">Meta</option>
              <option value="Nariño">Nariño</option>
              <option value="Norte de Santander">Norte de Santander</option>
              <option value="Putumayo">Putumayo</option>
              <option value="Quindío">Quindío</option>
              <option value="Risaralda">Risaralda</option>
              <option value="San Andrés y Providencia">
                San Andrés y Providencia
              </option>
              <option value="Santander">Santander</option>
              <option value="Sucre">Sucre</option>
              <option value="Tolima">Tolima</option>
              <option value="Valle del Cauca">Valle del Cauca</option>
              <option value="Vaupés">Vaupés</option>
              <option value="Vichada">Vichada</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Form.Group className="fort">
          <Form.Label>Co. Postal</Form.Label>
          <Form.Control
            value={cp}
            name="cp"
            onChange={tomarDatos}
            placeholder="Codigo postal"
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ margin: "1rem" }}>
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
