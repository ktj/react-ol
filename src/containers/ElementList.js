import { connect } from 'react-redux'
import ElementList from '../components/ElementList'
import * as ListActions from '../actions/list'

function mapStateToProps(state) {
  return {
    list: state.list.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addElement: (element) => {
      dispatch(ListActions.addElement(element))
    },
    removeElement: (element) => {
      dispatch(ListActions.removeElement(element))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ElementList)
