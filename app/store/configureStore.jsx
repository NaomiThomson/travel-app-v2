var redux = require('redux');
import thunk from 'redux-thunk';



import {sessionInfoReducer} from 'reducers';
import {locationReducer} from 'reducers';
import {coordsReducer} from 'reducers';
import {tripDetailsReducer} from 'reducers';

export var configure = (initalState = {}) => {
  var reducer = redux.combineReducers({
    sessionInfo: sessionInfoReducer,
    location: locationReducer,
    coordinates: coordsReducer,
    tripDetails: tripDetailsReducer
  });

  var store = redux.createStore(reducer, initalState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};