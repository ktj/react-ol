export const SET_COORDINATES = 'SET_COORDINATES'
export const SET_ZOOM = 'SET_ZOOM'

export const setCoordinates = coordinates => ({ type: SET_COORDINATES, coordinates })

export const setZoom = zoom => ({ type: SET_ZOOM, zoom })
