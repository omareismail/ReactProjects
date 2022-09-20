import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "omar", duration: "80" },
    { title: "israa", duration: "40" },
    { title: "ethar", duration: "20" },
    { title: "sara", duration: "60" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  } else return selectedSong;
};
const counterReducer = (counter = 0, action) => {
  if (action.type === "COUNTER_PLUS") {
    return counter + 1;
  } else if (action.type === "COUNTER_MINUS") {
    return counter - 1;
  } else return counter;
};

export default combineReducers({
  songs: songsReducer,
  selctedSong: selectedSongReducer,
  counter: counterReducer,
});
