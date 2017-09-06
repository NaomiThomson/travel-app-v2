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