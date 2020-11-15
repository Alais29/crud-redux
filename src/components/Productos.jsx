import React, {useEffect} from 'react'
import Producto from './Producto'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { obtenerProductosAction } from '../actions/productoActions'

const Productos = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    //consultar la API
    const cargarProductos = () => dispatch(obtenerProductosAction())
    cargarProductos()

  }, [])

  //obtener el state
  const productos = useSelector(state => state.productos.productos)
  const error = useSelector(state => state.productos.error)
  const cargando = useSelector(state => state.productos.loading)

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {error && <p className="font-weigt-bold alert alert-danger text-center mt-4">Hubo un error</p>}
      {cargando && <p className="text-center mt-4">Cargando...</p>}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? 'No hay productos' : (
            productos.map(producto => (
              <Producto
                key={producto.id}
                producto={producto}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  )
}

export default Productos
