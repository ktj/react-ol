import React from 'react'
import PropTypes from 'prop-types'
import {
   layer, control, Controls,
   Map, Layers
} from 'react-openlayers'

const OlMap = ({ coordinates, zoom, onMapMove }) =>
  (<div>
    <h1>Map</h1>
    <Map view={{ center: coordinates, zoom }} onMoveend={onMapMove}>
      <Layers>
        <layer.Tile />
      </Layers>
      <Controls attribution={false} >
        <control.ZoomSlider />
      </Controls>
    </Map>
  </div>)

OlMap.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired
}

export default OlMap
