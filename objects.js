var playlist = {Muse: 'Something Human'};

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, obj,{ [artist]: song });
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist;
  return playlist;
}
