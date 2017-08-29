var redux = require('redux');
import thunk from 'redux-thunk';



import {sessionInfoReducer} from 'reducers';
import {coordsReducer} from 'reducers';
import {tripDetailsReducer} from 'reducers';
import {mapURLReducer} from 'reducers';
import {itineraryListReducer} from 'reducers';
import {ExampleReducer} from 'reducers';

export var configure = (initalState = {}) => {
  var reducer = redux.combineReducers({
    sessionInfo: sessionInfoReducer,
    coordinates: coordsReducer,
    tripDetails: tripDetailsReducer,
    mapURL: mapURLReducer,
    itineraryList: itineraryListReducer
  });

  var store = redux.createStore(reducer, initalState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};