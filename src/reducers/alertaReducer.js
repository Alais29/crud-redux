import { alertaActionTypes } from '../types'

// Cada reducer tiene su state

const initialState = {
  alerta: null
}

export default function alertaReducers (state = initialState, action) {
  switch (action.type) {
    case alertaActionTypes.MOSTRAR_ALERTA:
      return {
        ...state,
        alerta: action.payload
      }
    case alertaActionTypes.OCULTAR_ALERTA:
      return {
        ...state,
        alerta: null
      }
    default:
      return state;
  }
}