import { connect } from 'react-redux'
import OlMap from '../components/OlMap'
import * as MapActions from '../actions/map'

function mapStateToProps(state) {
  return {
    coordinates: state.map.coordinates
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMapMove: event => dispatch(MapActions.setCoordinates(event.coordinate))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OlMap)
