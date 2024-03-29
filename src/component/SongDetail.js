import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>;
    }

    return (
        <div>
            <h1>Song details</h1>
            <p>
                Title : {song.title}
                <br />
                Duration : {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);