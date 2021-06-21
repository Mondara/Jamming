import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlists from '../Playlists/Playlists';

import Spotify from '../../util/Spotify';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: "name1", artist: "artist1", album: "album1", id: 1},
        {name: "name2", artist: "artist2", album: "album2", id: 2}
        ],
      playlistName: 'playListName1',
      playlistTracks: [
        {name: "name3", artist: "artist3", album: "album3", id: 3},
        {name: "name4", artist: "artist4", album: "album4", id: 4}
      ]      
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {      
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }

  removeTrack(removeTrack) {
    let filteredTrack = this.state.playlistTracks.filter(track =>  track.id !== removeTrack.id)
    this.setState({playlistTracks: filteredTrack});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }
  
  savePlaylist() {
    const trackURIs = this.state.playlistTrack.map(track => track.uri);
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  render() {
    return(
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlists 
            playlistName={this.state.playListName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
          />
        </div>
      </div>
    </div>
    )
  }
}


export default App;
