import { productosActionTypes } from '../types'
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'

// Crear nuevos productos

export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto())
    
    try {
      //insertar en la API
      await clienteAxios.post('/productos', producto)
      // Si todo sale bien, actualizar el state
      dispatch(agregarProductoExito(producto))
      
      // Alerta
      Swal.fire(
        'Correcto',
        'El producto se agregó correctamente',
        'success'
      )
    } catch (err) {
      console.log(err)
      // si hay un error, cambiar el state
      dispatch(agregarProductoError(true))

      // Alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo'
      })
    }
  }
}

const agregarProducto = () => ({
  type: productosActionTypes.AGREGAR_PRODUCTO,
  payload: true
})

//si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
  type: productosActionTypes.AGREGAR_PRODUCTO_EXITO,
  payload: producto
})

//si hubo un error
const agregarProductoError = (estado) => ({
  type: productosActionTypes.AGREGAR_PRODUCTO_ERROR,
  payload: estado
})

//función que descarga los productos de la base de datos
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos())
    
    try {
      const respuesta = await clienteAxios.get('/productos')
      dispatch(descargaProductosExitosa(respuesta.data))
    } catch (error) {
      console.log(error)
      dispatch(descargaProductosError())
    }
  }
}

const descargarProductos = () => ({
  type: productosActionTypes.COMENZAR_DESCARGA_PRODUCTOS,
  payload: true
})

const descargaProductosExitosa = productos => ({
  type: productosActionTypes.DESCARGA_PRODUCTOS_EXITO,
  payload: productos
})

const descargaProductosError = () => ({
  type: productosActionTypes.DESCARGA_PRODUCTOS_ERROR,
  payload: true
})

// Selecciona y elimina el producto
export function borrarProductoAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id))

    try {
      await clienteAxios.delete(`/productos/${id}`)
      dispatch(eliminarProductoExito())
      //Si se elimina, mostrar alerta

      Swal.fire(
        'Eliminado!',
        'El producto se eliminó correctamente',
        'success'
      )
    } catch (error) {
      console.log(error)
      dispatch(eliminarProductoError())
    }
  }
}

const obtenerProductoEliminar = id => ({
  type: productosActionTypes.OBTENER_PRODUCTO_ELIMINAR,
  payload: id
})

const eliminarProductoExito = () => ({
  type: productosActionTypes.PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
  type: productosActionTypes.PRODUCTO_ELIMINADO_ERROR,
  payload: true
})

// Colocar producto en edición
export function obtenerProductoEditar(producto) {
  return (dispatch) => {
    dispatch(obtenerProductoEditarAction(producto))
  }
}

const obtenerProductoEditarAction = producto => ({
  type: productosActionTypes.OBTENER_PRODUCTO_EDITAR,
  payload: producto
})

//Edita un registro en la api y state
export function editarProductoAction(producto) {
  return async (dispatch) => {
    dispatch(editarProducto())

    try {
      await clienteAxios.put(`/productos/${producto.id}`, producto)
      dispatch(editarProductoExito(producto))
    } catch (error) {
      console.log(error)
      dispatch(editarProductoError())
    }
  }
}

const editarProducto = () => ({
  type: productosActionTypes.COMENZAR_EDICION_PRODUCTO
})

const editarProductoExito = producto => ({
  type: productosActionTypes.PRODUCTO_EDITADO_EXITO,
  payload: producto
})

const editarProductoError = () => ({
  type: productosActionTypes.PRODUCTO_EDITADO_ERROR,
  payload: true
})