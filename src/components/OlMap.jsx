import React from 'react'
import {
   layer, control, Controls,
   Map, Layers
} from "react-openlayers";

export default () =>
  (<div>
    <h1>Map</h1>
    <Map view={{center: [0, 0], zoom: 2}} >
    <Layers>
        <layer.Tile/>
      </Layers>
      <Controls attribution={false} zoom={true}>
        <control.ZoomSlider />
      </Controls>
    </Map>
  </div>)
