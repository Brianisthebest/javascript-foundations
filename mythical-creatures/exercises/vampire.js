function createVampire(name, pet = 'bat') {
  return {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0
  }
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty == true) {
    return 'I WANT TO SUCK YOUR BLOOD!'
  } else {
    return 'No thanks, I am too full.'
  }
};

function drink(vampire) {
  if (vampire.ouncesDrank < 50) {
    vampire.ouncesDrank += 10
    vampire.thirsty = false
   }
   return vampire
};

function inquirePlace(locations, location) {
  for (i = 0; i < locations.length; i++) {
    if (locations[i] == location) {
      return `Yes, I have spent some time in ${location}.`
    } 
  }
  return `No, I have never been to ${location}.`
}

function findBatLovers(vampires) {
  var vampNames = []
  for (i = 0; i < vampires.length; i++) {
    if (vampires[i].pet == 'bat'){
     vampNames.push(vampires[i].name)
    }
  }
  return vampNames
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}