import React from "react";
import './playList.css';
import Tracklist from '../Tracklist/Tracklist';
// "de06aee44c9f4d3caa15dea24a03bc98"
class PlayList extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);

    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
            <div className="playlist">
                <input onChange={this.handleNameChange} defaultValue={'New playlist'} />
                <Tracklist track={this.props.playlistTracks}
                    isRemoval={true}
                    onRemove={this.props.onRemove} />
                <button className="playlist-save" onClick={this.onSave}>Save to Spotify</button>
            </div>

        );
    }
}
export default PlayList;