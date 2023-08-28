function createElevator(building, floors, currentFloor, passengers) {
  var elevator = {
    building: building,
    floors: floors,
    currentFloor: currentFloor,
    passengers: passengers
  };
  return elevator;
}

function changeFloors(elevator, newFloor) {
  if(elevator.floors < newFloor) {
    return `Floor ${newFloor} does not exist!`
  }else if(elevator.currentFloor != newFloor) {
    elevator.currentFloor = newFloor
    return `Taking you to floor ${newFloor}!`
  } else {
    return `You\'re already on floor ${newFloor}!`
  }
}

function dropOffPassenger(elevator, passenger) {
  for(i = 0; i < elevator.passengers.length; i++) {
    if(elevator.passengers[i] == passenger) {
      elevator.passengers.splice(i, 1);
      break;
    }
  }
  return elevator.passengers
}

module.exports = { 
  createElevator,
  changeFloors,
  dropOffPassenger,
 };
