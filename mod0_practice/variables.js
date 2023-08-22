// var firstName = 'brian'
// var lastName = 'guthrie'

// var age = 35
// var number = 70

// var old = true
// var hungry = false

// console.log(hungry)
// console.log(age)

// hungry = true
// age = 36

// console.log(hungry)
// console.log(age)

// var students = ["Cindy", "Josiah", "Rigo"];
// students.pop();

// console.log(students);
// var ticketPrices = [87, 67, 99, 90, 87];

// console.log(ticketPrices.slice(1, 3));

// var animals = ['winston', 'mach', 'tlly']

// for (i = 0; i < animals.length; i++) {
//   console.log(`My animals name is ${animals[i]}`)
// }

// var numbers = [10, 11, 7, 19, 4, 52, 89, 9, 12, 10]

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 10) {
//     console.log(numbers[i])
//   }
// }

// for (i = 3; i < 15; i++) {
//   console.log(i)
// }

// var numbers = [2, 4, 6, 8, 10, 12]

// for (i = 0; i < numbers.length; i++) {
//   console.log(Math.sqrt(numbers[i]))
// }

// var words = ["sUnNy", "BeAcH", "wAvEs", "ReLaX"]

// for (i = 0; i < words.length; i++) {
//   console.log(words[i].toLowerCase())
// }

// var names = ["Pilar", "Petunia", "Pamela", "Tan", "Amanda", "Phil"]

// for (i = 0; i < names.length; i++) {
//   if (names[i].includes("P")) {
//     console.log(names[i])
//   }
// }

// for (i = 1; i < 101; i++); {
//   if (i % 2 == 0); {
//     console.log(i);
//   }
// }

// function greetATexan(name) {
//   return `Howdy ${name}`;
// }

// console.log(greetATexan('Brian'));
// console.log(greetATexan('Jacob'));

// function subtract(min, max) {
//   var difference = max - min;
//   return difference
// }

// console.log(subtract(5, 15))

// console.log(`The difference between these two numbers is ${subtract(10, 30)}`)

function getAge(year) {
  var birthYear = year;
  var age = 2023 - year;
  return age
}

console.log(`You have lived ${getAge(1987)} years.`)
console.log(`You have lived ${getAge(1997)} years.`)
console.log(`You have lived ${getAge(2007)} years.`)