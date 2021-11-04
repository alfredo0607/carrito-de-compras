import {
  AGREGAR_CARRITO,
  AGREGAR_CARRITO_ERROR,
  AGREGAR_CARRITO_EXITO,
  AGREGAR_PEDIDO,
  AGREGAR_PEDIDO_ERROR,
  AGREGAR_PEDIDO_EXITO,
  ELIMINAR_PRODUCTO_CARRITO,
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

const initialState = {
  loading: true,
  productos: [],
  error: false,
  filtro: [],
  buscar: null,
};

export const productoReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        loading: true,
      };

    case OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        productos: action.payload,
      };

    case FILTRAR_PRODUCTO_ERROR:
    case OBTENER_PRODUCTOS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case FILTRAR_PRODUCTO:
      return {
        ...state,
        buscar: action.payload,
      };

    case FILTRAR_PRODUCTO_FILTRO:
      return {
        ...state,
        productos: state.productos.filter((producto) =>
          producto.name.toLowerCase().includes(state.buscar.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

const initialStateCarrito = {
  carritos: [],
  loading: true,
  error: false,
  productoid: null,
  dataEntrega: {},
};

export const carritoReducer = (state = initialStateCarrito, action) => {
  switch (action.type) {
    case ELIMINAR_PRODUCTO_CARRITO:
    case AGREGAR_PEDIDO:
    case AGREGAR_CARRITO:
    case ID_PRODUCTO:
      return {
        ...state,
        loading: true,
      };

    case ID_PRODUCTO_ADD:
      return {
        ...state,
        loading: false,
        productoid: action.payload,
      };

    case AGREGAR_CARRITO_EXITO:
      const item = action.payload;
      const existItem = state.carritos.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          carritos: state.carritos.map((x) =>
            x.id === existItem.id ? item : x
          ),
          productoid: null,
        };
      } else {
        return {
          ...state,
          carritos: [...state.carritos, item],
          productoid: null,
        };
      }

    case AGREGAR_PEDIDO_ERROR:
    case ID_PRODUCTO_ERROR:
    case AGREGAR_CARRITO_ERROR:
      return {
        ...state,
        error: true,
      };

    case ELIMINAR_PRODUCTO_EXITO:
      return {
        ...state,
        carritos: state.carritos.filter(
          (carrito) => carrito.id !== action.payload
        ),
      };

    case AGREGAR_PEDIDO_EXITO:
      return {
        ...state,
        dataEntrega: action.payload,
      };

    default:
      return state;
  }
};
