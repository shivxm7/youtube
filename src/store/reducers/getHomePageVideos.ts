import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";
import { YOUTUBE_API_URL } from "../../utils/constants";
import { HomePageVideos } from "../../Types";
import { parseData } from "../../utils";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk("youtubeApp/homePageVideos", async (isNext:boolean, { getState }) => {
    const{
        youtubeApp :{nextPageToken: nextPageTokenFromState, videos},
    } = getState() as RootState;

    const {
        data: {items, nextPageToken}
    } = await axios.get(`${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=videos`)
    
    // console.log(items);
    const parsedData:HomePageVideos[] = await parseData(items);
    return {parsedData:[...videos, ...parsedData], nextPageToken};
}
);
