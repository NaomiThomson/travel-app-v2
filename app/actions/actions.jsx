export var setSessionInfo = (sessionInfo) => {
  return {
    type: "SET_SESSION_INFO",
    sessionInfo
  };
};

export var setLocation = (location) => {
  return {
    type: "SET_LOCATION",
    location
  }
};

export var setCoords = (coordinates) => {
  return {
    type: "SET_COORDS",
    coordinates
  }
}