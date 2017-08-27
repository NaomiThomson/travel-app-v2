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
  coordinates: undefined
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