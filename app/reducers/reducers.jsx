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

var journeyListDefault = {
  list: undefined
};

export var journeyListReducer = (state = journeyListDefault, action) => {
  switch (action.type) {
    case 'SET_JOURNEY_LIST':
      return action.journeyList;
    default: 
      return state
  }
};

var currentJourneyDefault = {
  _id: undefined
};

export var currentJourneyReducer = (state = currentJourneyDefault, action) => {
  switch (action.type) {
    case 'SET_CURRENT_JOURNEY':
      return action.currentJourney;
    default: 
      return state
  }
};


var journeyInfoDefault = {
  title: undefined,
  destination: undefined,
  startDate: undefined,
  endDate: undefined,
  entries: undefined,
  _creator: undefined,
  _id: undefined
};

export var journeyInfoReducer = (state = journeyInfoDefault, action) => {
  switch (action.type) {
    case 'SET_JOURNEY_INFO':
      return action.journeyInfo;
    default: 
      return state
  }
}

