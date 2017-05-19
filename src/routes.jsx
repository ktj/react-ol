import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HelloWorld from './components/HelloWorld'
import Counter from './containers/Counter'
import OlMap from './containers/OlMap'
import ElementList from './containers/ElementList'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HelloWorld} />
    <Route path="counter" component={Counter} />
    <Route path="map" component={OlMap} />
    <Route path="list" component={ElementList} />
  </Route>
)

export default routes
