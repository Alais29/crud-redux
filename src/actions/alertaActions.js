import { alertaActionTypes } from '../types'

//Muestra alerta
export function mostrarAlerta(alerta) {
  return (dispatch) => {
    dispatch(crearAlerta(alerta))
  }
}

const crearAlerta = alerta => ({
  type: alertaActionTypes.MOSTRAR_ALERTA,
  payload: alerta
})

// Ocultar la alerta
export function ocultarAlertaAction() {
  return (dispatch) => {
    dispatch(ocultarAlerta())
  }
}

const ocultarAlerta = () => ({
  type: alertaActionTypes.OCULTAR_ALERTA
})