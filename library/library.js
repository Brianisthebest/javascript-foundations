const { truncateThreshold } = require("chai/lib/chai/config");

function issueCard(name, age) {
  var card = {
    name: name,
    age: age,
    numBooksCheckedOut: 0,
    isChild: false
  };
  if(age < 13) {
    card.isChild = true;
  }
  return card;
}

function searchByAuthor(collection, author) {
  var books = [];
  for(i = 0; i < collection.length; i++) {
    if(collection[i].author == author) {
      books.push(collection[i])
    };
  } if(books.length == 0) {
    return 'No book found for search criteria';
  } else {
    return books;
  }
}

module.exports = { 
  issueCard,
  searchByAuthor
 };