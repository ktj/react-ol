import { ADD_ELEMENT, REMOVE_ELEMENT } from '../actions/list'

const initialState = {
  list: [],
}

export default function map(state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT:
      return Object.assign({}, state, { list: [...state.list, action.element] })
    case REMOVE_ELEMENT:
      return Object.assign({}, state, { list: state.list.filter(e => e !== action.element) })
    default:
      return state
  }
}
