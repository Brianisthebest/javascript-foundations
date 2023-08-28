function createCollection(name, description, tracks = []) {
  var collection = {
    name: name,
    description: description,
    tracks: tracks
  }
  return collection;
}

function createTrack(title = 'unknown', artist = 'unknown', duration = 0) {
  var track = {
    title: title,
    artist: artist,
    duration: duration
  }
  return track;
}

function reviewTrack(track) {
  if(track.artist === 'Red Hot Chili Peppers') {
    return `The song ${track.title} rules!`
  } else {
    return `I wish this was a Red Hot Chili Peppers song.`
  }
}

function addTrack(collection, track) {
  if(collection.length > 1){
    for(i = 0; i < track.length; i++) {
      collection.tracks.push(track)
    }
  } else {
    collection.tracks.push(track)
  }
  return collection;
}

function getTotalDuration(collection) {
  var total = 0
  for(i = 0; i < collection.tracks.length; i++) {
    total += collection.tracks[i].duration
  }
  return total;
}

function findTracksByArtist(collection, artist) {
  var foundTracks = [];
  for(i = 0; i < collection.tracks.length; i++) {
    if(collection.tracks[i].artist === artist) {
      foundTracks.push(collection.tracks[i]);
    }
  }
  return foundTracks;
}

  module.exports = { 
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist,
   }