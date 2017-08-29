export var setSessionInfo = (sessionInfo) => {
  return {
    type: "SET_SESSION_INFO",
    sessionInfo
  };
};

export var setCoords = (coordinates) => {
  return {
    type: "SET_COORDS",
    coordinates
  }
};

export var setTripDetails = (tripDetails) => {
  return {
    type: "SET_TRIP_DETAILS",
    tripDetails
  }
};

export var setMapURL = (mapURL) => {
  return {
    type: "SET_MAP_URL",
    mapURL
  }
};

export var setMyTripsList = (myTripsList) => {
  return {
    type: "SET_MY_TRIPS_LIST",
    myTripsList
  }
};


export var setExample = (example) => {
  return {
    type: "SET_EXAMPLE",
    example
  }
};
