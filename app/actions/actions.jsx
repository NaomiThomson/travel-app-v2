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