import React from 'react'
import PropTypes from 'prop-types'
import Element from './Element'
import AddElements from './AddElements'

const ElementList = ({ list, addElement, removeElement }) =>
	<div>
		<ul>
			{list.map((elem, i) => <Element key={i}
				                              element={elem}
				                              removeElement={removeElement}/>)}
		</ul>
		<AddElements addElement={addElement}/>
	</div>

ElementList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  addElement: PropTypes.func.isRequired,
  removeElement: PropTypes.func.isRequired
}

export default ElementList
