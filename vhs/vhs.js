function createTape(title = '', readyToPlay = false) {
  var tape = {
    title: title,
    readyToPlay: readyToPlay
  };
  return tape;
}

function reset(tape) {
  if(tape.readyToPlay === false) {
    tape.readyToPlay = true;
  }
  return tape;
}

function createCollection(film1, film2, film3) {
  var collection = [];
  if(film1 === undefined || film2 === undefined || film3 === undefined) {
    return 'Your collection is empty.'
  } else {
    collection.push(film1, film2, film3)
  }
  return collection;
}

function previewCollection(collection) {
  var preview = [];
  for(i = 0; i < collection.length; i++) {
    preview.push(collection[i].title)
  }
  return preview;
}

module.exports = { 
  createTape,
  reset,
  createCollection,
  previewCollection,
 }