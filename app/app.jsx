var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var axios = require('axios');

var Main = require('Main');
import Landing from 'Landing';
import Login from 'Login';
import Signup from 'Signup';
import DisplayMap from 'DisplayMap';


var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
});

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Landing}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup} />
        <Route path="/map" component={DisplayMap}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
