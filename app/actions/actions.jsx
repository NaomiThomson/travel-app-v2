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

export var setItineraryList = (itineraryList) => {
  return {
    type: "SET_ITINERARY_LIST",
    itineraryList
  }
};

export var setCurrentItinerary = (currentItinerary) => {
  return {
    type: "SET_CURRENT_ITINERARY",
    currentItinerary
  }
};