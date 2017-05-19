export const ADD_ELEMENT = 'ADD_ELEMENT'
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT'

export const addElement = element => ({ type: ADD_ELEMENT, element })

export const removeElement = element => ({ type: REMOVE_ELEMENT, element })
