import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../Types";
import { getHomePageVideos } from "./reducers/getHomePageVideos";

const initialState:InitialState = {
    videos:[],
    currentPlaying:null,
    searchTerms: "",
    searchResult: [],
    nextPageToken: "",
    recommendedVideos: []
}

const YoutubeSlice = createSlice({
    name:"YoutubeApp",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
            // state.videos = action.payload.parsedData;
            // state.nextPageToken = action.payload.nextPageToken;
        })
    },
})

export const store = configureStore({
    reducer: {
        youtubeApp: YoutubeSlice.reducer,

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
