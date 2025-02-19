import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CurrentSongState {
  playing: boolean;
  songName: string | null | undefined;
  folderName: string | null | undefined;
  coverImg: string | null | undefined;
  songFile: string | null | undefined;
}

const initialState: CurrentSongState = {
  playing: false,
  songName: null,
  folderName: null,
  coverImg: null,
  songFile: null,
};

interface SetSongInfoAction {
  songName: string | null;
  folderName: string | null | undefined;
  coverImg: string | null | undefined;
  songFile: string | null | undefined;
}

export const songInfoSlice = createSlice({
  name: "songInfo",
  initialState,
  reducers: {
    setSongInfo: (state, action: PayloadAction<SetSongInfoAction>) => {
      state.coverImg = action.payload.coverImg;
      state.songName = action.payload.songName;
      state.folderName = action.payload.folderName;
      state.songFile = action.payload.songFile;
      if (!state.playing) state.playing = true;
    },
    toggleSongPlaying: (state) => {
      state.playing = !state.playing;
    },
  },
});

export const { setSongInfo, toggleSongPlaying } = songInfoSlice.actions;

export default songInfoSlice.reducer;
