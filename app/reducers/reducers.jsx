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

var locationDefault = {
  city: 'Irvine,CA'
};

export var locationReducer = (state = locationDefault, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.location;
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
      return state
  }
}