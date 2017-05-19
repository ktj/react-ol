import { connect } from 'react-redux'
import OlMap from '../components/OlMap'
import * as MapActions from '../actions/map'

function mapStateToProps(state) {
  return {
    coordinates: state.map.coordinates,
    zoom: state.map.zoom
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMapMove: (event) => {
      dispatch(MapActions.setCoordinates(event.map.getView().getCenter()))
      dispatch(MapActions.setZoom(event.map.getView().getZoom()))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OlMap)
