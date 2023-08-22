function createAirport(name, airlines, gates) {
  return {
    name: name,
    airlines: airlines,
    availableGates: gates,
    message: ''
  }
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, flights) {
  if(airport.availableGates > flights) {
    airport.availableGates -= flights
    airport.message = `Success! Current availability is ${airport.availableGates}.`
    return airport
  } else {
    airport.message = `Oh no! Not enough gates available. Current overflow is ${flights - airport.availableGates}.`
    airport.availableGates = 0
    return airport
  }
}

function checkAirlineLocations(airports, airline) {
  certifiedAirlines = []
  for(i = 0; i < airports.length; i++) {
    if(airports[i].airlines.includes(airline)) {
      certifiedAirlines.push(airports[i].name)
    }
  }
  return certifiedAirlines
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
