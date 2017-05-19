import React from 'react'
import PropTypes from 'prop-types'

const Element = ({ element, removeElement }) =>
  <li>
    <span>{element} </span>
    <button onClick={() => { removeElement(element) }}>del</button>
  </li>

Element.propTypes = {
  element: PropTypes.string.isRequired,
  removeElement: PropTypes.func.isRequired
}

export default Element
