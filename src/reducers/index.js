import { combineReducers } from 'redux';
import { selectSong } from '../actions';

const songsReducers = () => {
    return [
        { title: 'aaa', duration: '50' },
        { title: 'bbb', duration: '50' },
        { title: 'ccc', duration: '50' }
    ];
};

const selectedSongReducers = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducers
});