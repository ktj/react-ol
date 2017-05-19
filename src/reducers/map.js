import { SET_COORDINATES, SET_ZOOM } from '../actions/map'

const initialState = {
  coordinates: [0, 0],
  zoom: 5
}

export default function map(state = initialState, action) {
  switch (action.type) {
    case SET_COORDINATES:
      return Object.assign({}, state, { coordinates: action.coordinates })
    case SET_ZOOM:
      return Object.assign({}, state, { zoom: action.zoom })
    default:
      return state
  }
}
