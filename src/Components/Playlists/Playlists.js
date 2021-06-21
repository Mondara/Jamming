import React from 'react';

import TrackList from '../TrackList/TrackList';
import './Playlists.css';

class Playlists extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                {/* <TrackList /> */}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        ) 
    }
}

export default Playlists;