export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export const counterPlus = () => {
  return {
    type: "COUNTER_PLUS",
  };
};
export const counterMinus = () => {
  return {
    type: "COUNTER_MINUS",
  };
};
