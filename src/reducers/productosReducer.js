import { productosActionTypes } from './../types'

// Cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoeliminar: null,
  productoeditar: null
}

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    case productosActionTypes.AGREGAR_PRODUCTO:
    case productosActionTypes.COMENZAR_DESCARGA_PRODUCTOS:
      return {
        ...state,
        loading: action.payload,
      }
    case productosActionTypes.AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload]
      }
    case productosActionTypes.AGREGAR_PRODUCTO_ERROR:
    case productosActionTypes.DESCARGA_PRODUCTOS_ERROR:
    case productosActionTypes.PRODUCTO_ELIMINADO_ERROR:
    case productosActionTypes.PRODUCTO_EDITADO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case productosActionTypes.DESCARGA_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload
      }
    case productosActionTypes.OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        productoeliminar: action.payload
      }
    case productosActionTypes.PRODUCTO_ELIMINADO_EXITO:
      return {
        ...state,
        productos: state.productos.filter(producto => producto.id !== state.productoeliminar),
        productoeliminar: null
      }
    case productosActionTypes.OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoeditar: action.payload
      }
    case productosActionTypes.PRODUCTO_EDITADO_EXITO:
      return {
        ...state,
        productoeditar: null,
        productos: state.productos.map(producto =>
          producto.id === action.payload.id ? producto = action.payload : producto
        )
      }
    default:
      return state;
  }
}