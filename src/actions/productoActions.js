import { productosActionTypes } from '../types'

// Crear nuevos productos

export function crearNuevoProductoAction(producto) {
  return () => {
    console.log(producto)
  }
}