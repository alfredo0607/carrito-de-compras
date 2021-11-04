/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import ListarCartas from "./componentes/ListarCartas";
import Carrito from "./componentes/Carrito";
import { useDispatch } from "react-redux";
import { filtrar, obtenerProductos } from "./actions/productosActions";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Paymen from "./componentes/Paymen";
import FormPedido from "./componentes/FormPedido";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [buscar, setbuscar] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setbuscar(event.target.value);
  };

  useEffect(() => {
    if (buscar) {
      dispatch(filtrar(buscar));
    } else {
      dispatch(obtenerProductos());
    }
  }, [buscar, dispatch]);

  const propiedades = {
    scroll: false,
    backdrop: false,
  };

  return (
    <Fragment>
      <BrowserRouter>
        <>
          <Offcanvas show={show} onHide={handleClose} {...propiedades}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Carrito setShow={setShow} />
            </Offcanvas.Body>
          </Offcanvas>
        </>

        <Navbar expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="/">Carrito de Compras</Navbar.Brand>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="bb"
                name="buscar"
                value={buscar}
                onChange={handleSearch}
                style={{ width: "100%" }}
              />
              <Button variant="dark" style={{ border: "1px solid" }}>
                Search
              </Button>
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>

              <Nav>
                <Nav.Link onClick={handleShow}>
                  <AiOutlineShoppingCart className="logo-card" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/" component={ListarCartas} />
          <Route exact path="/formulario/paymen" component={Paymen} />
          <Route exact path="/formulario" component={FormPedido} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
