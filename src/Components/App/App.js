import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlists from '../Playlists/Playlists';


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

  render() {
    return(
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlists playlistName={this.state.playListName} playlistTracks={this.state.playlistTracks}/>
        </div>
      </div>
    </div>
    )
  }
}


export default App;
