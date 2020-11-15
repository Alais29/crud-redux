import { productosActionTypes } from './../types'

// Cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false
}

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}