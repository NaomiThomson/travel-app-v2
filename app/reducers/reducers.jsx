var sessionDefault = {
  username: undefined,
  token: undefined,
  id: undefined,
  loggedIn: false
};

export var sessionInfoReducer = (state = sessionDefault, action) => {
  switch (action.type) {
    case 'SET_SESSION_INFO':
      return action.sessionInfo;
    default:
      return state;
  };
};

var coordsDefault = {
  lat: undefined, 
  lng: undefined
}; 

export var coordsReducer = (state = coordsDefault, action) => {
  switch (action.type) {
    case 'SET_COORDS':
      return action.coordinates;
    default:
      return state;
  }
};

var tripDetailsDefault = {
  location: undefined,
  startDate: undefined,
  endDate: undefined,
  id: undefined
};

export var tripDetailsReducer = (state = tripDetailsDefault, action) => {
  switch(action.type) {
    case 'SET_TRIP_DETAILS':
      return action.tripDetails;
    default: 
      return state;
  }
}; 

var mapURLDefault = {
  url: undefined
};

export var mapURLReducer = (state = mapURLDefault, action) => {
  switch (action.type) {
    case 'SET_MAP_URL':
      return action.mapURL;
    default: 
      return state
  }
};

var itineraryListDefault = {
  list: undefined
};

export var itineraryListReducer = (state = itineraryListDefault, action) => {
  switch (action.type) {
    case 'SET_ITINERARY_LIST':
      return action.itineraryList;
    default: 
      return state
  }
};

var currentItineraryDefault = {
  _id: undefined,
  _creator: undefined,
  endDate: undefined,
  startDate: undefined,
  location: undefined
};

export var currentItineraryReducer = (state = currentItineraryDefault, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ITINERARY':
      return action.currentItinerary;
    default: 
      return state
  }
};


// from redux-form
const LOAD = 'redux-form-examples/account/LOAD'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data
      }
    default:
      return state
  }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({ type: LOAD, data })

export default reducer