import { SET_COORDINATES } from '../actions/map'

const initialState = {
  coordinates: [0, 0]
}

export default function map(state = initialState, action) {
  switch (action.type) {
    case SET_COORDINATES:
      return Object.assign({}, state, { coordinates: action.coordinates })
    default:
      return state
  }
}
