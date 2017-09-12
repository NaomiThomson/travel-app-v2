var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var axios = require('axios');

var Main = require('Main');
import Login from 'Login';
import Signup from 'Signup';
import CreateJourney from 'CreateJourney';
import JourneyList from 'JourneyList';
import Journey from 'Journey';
import EditJourney from 'EditJourney';
import AllJourneys from 'AllJourneys';
import Upload from 'Upload';
import Landing from 'Landing';

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
});

// require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={AllJourneys}/>
        {/*<IndexRoute component={Landing} />*/}
        <Route path="/alljourneys" component={AllJourneys}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup} />
        <Route path="/create" component={CreateJourney}/>
        <Route path="/journey/edit/:id" component={EditJourney}/>
        <Route path="/myjourneys" component={JourneyList}/>
        <Route path="/journey/:id" component={Journey}/>
        <Route path="/upload" component={Upload} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
