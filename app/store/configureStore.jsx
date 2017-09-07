var redux = require('redux');
import thunk from 'redux-thunk';



import {sessionInfoReducer} from 'reducers';
import {coordsReducer} from 'reducers';
import {journeyListReducer} from 'reducers';
import {ExampleReducer} from 'reducers';
import {currentJourneyReducer} from 'reducers';
import { startDateReducer } from 'reducers';
import { endDateReducer } from 'reducers';
import { journeyInfoReducer } from 'reducers';


export var configure = (initalState = {}) => {
  var reducer = redux.combineReducers({
    sessionInfo: sessionInfoReducer,
    coordinates: coordsReducer,
    journeyList: journeyListReducer,
    currentJourney: currentJourneyReducer,
    journeyInfo: journeyInfoReducer
  });

  var store = redux.createStore(reducer, initalState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};