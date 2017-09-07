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

export var setJourneyList = (journeyList) => {
  return {
    type: "SET_JOURNEY_LIST",
    journeyList
  }
};

export var setCurrentJourney = (currentJourney) => {
  return {
    type: "SET_CURRENT_JOURNEY",
    currentJourney
  }
};

export var setJourneyInfo = (journeyInfo) => {
  return {
    type: "SET_JOURNEY_INFO",
    journeyInfo
  }
}