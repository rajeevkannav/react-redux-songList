import {combineReducers} from 'redux';

const songsReducers = () => {
    return [
        {title: 'No Scrubs', duration: '04:05'},
        {title: 'Macarena', duration: '02:30'},
        {title: 'All Stars', duration: '03:15'},
        {title: 'I want it that way', duration: '01:45'},
        {title: 'Binte Dil', duration: '05:03'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};


export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
})


