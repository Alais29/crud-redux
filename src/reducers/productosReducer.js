import { productosActionTypes } from './../types'

// Cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false
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
    default:
      return state;
  }
}