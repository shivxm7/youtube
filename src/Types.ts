export interface InitialState {
    videos: HomePageVideos[];
    currentPlaying: CurrentPlaying | null;
    searchTerms: string;
    searchResult: [];
    nextPageToken: string | null;
    recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos{}

export interface CurrentPlaying{}

export interface RecommendedVideos{}

