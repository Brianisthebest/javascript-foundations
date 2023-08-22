function createHobbit(name = 'unknown', age = 0) {
  return {
    name: name,
    age: age,
    isAdult: false,
    isOld: false,
    acquaintances: []
  }
}

function celebrateBirthday(hobbit) {
  hobbit.age += 1
  if (hobbit.age > 32 && hobbit.age < 100) {
    hobbit.isAdult = true
  } else if (hobbit.age > 100) {
    hobbit.isOld = true
  }
    else {
    hobbit.isAdult = false
  }
  return hobbit
}

function getRing(hobbit) {
  if (hobbit.name == 'Frodo') {
    return "Here is the ring!"
  } else {
    return `You can\'t have it!`
  }
}

function meetPeople(hobbit, people) {
  for (i = 0; i < people.length; i++) {
    hobbit.acquaintances.push(people[i]);
  }
  return hobbit;
}

function findFriends(hobbit) {
 var friends = [];
  for (i = 0; i < hobbit.acquaintances.length; i++) {
    if (hobbit.acquaintances[i].relationship == 'friend') {
      friends.push(hobbit.acquaintances[i].name)
    }
  }
  return friends;
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}