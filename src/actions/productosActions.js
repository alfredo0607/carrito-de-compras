import clienteAxios from "../config/axios";
import {
  AGREGAR_CARRITO,
  AGREGAR_CARRITO_ERROR,
  AGREGAR_CARRITO_EXITO,
  AGREGAR_PEDIDO,
  AGREGAR_PEDIDO_ERROR,
  AGREGAR_PEDIDO_EXITO,
  ELIMINAR_PRODUCTO_CARRITO,
  ELIMINAR_PRODUCTO_ERROR,
  ELIMINAR_PRODUCTO_EXITO,
  ID_PRODUCTO,
  ID_PRODUCTO_ADD,
  ID_PRODUCTO_ERROR,
} from "../types/carritoTypes";
import {
  FILTRAR_PRODUCTO,
  FILTRAR_PRODUCTO_ERROR,
  FILTRAR_PRODUCTO_FILTRO,
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_ERROR,
  OBTENER_PRODUCTOS_EXITO,
} from "../types/productoTypes";

export const obtenerProductos = () => async (Dispatch) => {
  Dispatch({ type: OBTENER_PRODUCTOS });
  try {
    const consulta = await clienteAxios.get("/productos");

    Dispatch({ type: OBTENER_PRODUCTOS_EXITO, payload: consulta.data });
  } catch (error) {
    Dispatch({ type: OBTENER_PRODUCTOS_ERROR, payload: true });
  }
};

export const filtrar = (dato) => (Dispatch) => {
  try {
    Dispatch({ type: FILTRAR_PRODUCTO, payload: dato });

    Dispatch({ type: FILTRAR_PRODUCTO_FILTRO, payload: dato });
  } catch (error) {
    Dispatch({ type: FILTRAR_PRODUCTO_ERROR, payload: true });
  }
};

export const obtenerProdutoAdd = (producto) => (Dispatch) => {
  Dispatch({ type: ID_PRODUCTO, payload: producto });
  try {
    Dispatch({ type: ID_PRODUCTO_ADD, payload: producto });
  } catch (error) {
    Dispatch({ type: ID_PRODUCTO_ERROR, payload: true });
  }
};

export function addCarrito(producto, cant) {
  return (Dispatch, getState) => {
    Dispatch({
      type: AGREGAR_CARRITO,
      payload: {
        name: producto.name,
        image: producto.image,
        price: producto.price,
        cantidad: cant,
      },
    });
    try {
      Dispatch({
        type: AGREGAR_CARRITO_EXITO,
        payload: {
          name: producto.name,
          image: producto.image,
          price: producto.price,
          id: producto.id,
          cantidad: cant,
        },
      });
      localStorage.setItem(
        "carritos",
        JSON.stringify(getState().cart.carritos)
      );
    } catch (error) {
      console.log(error);
      Dispatch({ type: AGREGAR_CARRITO_ERROR, payload: true });
    }
  };
}

export const eliminarOffCarrito = (id) => (Dispatch, getState) => {
  Dispatch({ type: ELIMINAR_PRODUCTO_CARRITO, payload: id });
  try {
    Dispatch({ type: ELIMINAR_PRODUCTO_EXITO, payload: id });
    localStorage.setItem("carritos", JSON.stringify(getState().cart.carritos));
  } catch (error) {
    console.log(error);
    Dispatch({ type: ELIMINAR_PRODUCTO_ERROR });
  }
};

export const dataPedido = (pedido) => (Dispatch, getState) => {
  Dispatch({ type: AGREGAR_PEDIDO, payload: pedido });
  try {
    Dispatch({ type: AGREGAR_PEDIDO_EXITO, payload: pedido });
    localStorage.setItem(
      "dataEntrega",
      JSON.stringify(getState().cart.dataEntrega)
    );
  } catch (error) {
    Dispatch({ type: AGREGAR_PEDIDO_ERROR, payload: true });
  }
};
