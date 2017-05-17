import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HelloWorld from './components/HelloWorld'
import Counter from './containers/Counter'
import OlMap from './components/OlMap'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HelloWorld} />
    <Route path="counter" component={Counter} />
    <Route path="map" component={OlMap} />
  </Route>
)

export default routes
