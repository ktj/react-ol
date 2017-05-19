import React from 'react'
import PropTypes from 'prop-types'

let value = "";
const valueChanged = (event)=>{value = event.target.value}
const AddElements = ({ addElement }) =>
	<span>
		<input type="text" onChange={ valueChanged }/>
		<button onClick={() => {addElement(value)}}>+</button>
	</span>

AddElements.propTypes = {
  addElement: PropTypes.func.isRequired
}

export default AddElements
