import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    searchResult: [],
    status: "idle",
    error: null,
    afterCode: ''
};

export const fetchSearchResults = createAsyncThunk("api/fetchSearchResults", async ({ subreddit = "pics" }) => {
    const response = await axios.get(`https://www.reddit.com/search.json?q=${subreddit}&include_over_18=on&type=sr`);
    return response.data.data.children;
});

export const fetchApi = createAsyncThunk("api/fetchApi", async ({ subreddit = "pics", sort = "hot" }) => {
    let response;
    if(sort !== 'top'){
        response = await axios.get(`https://www.reddit.com/r/${subreddit}/${sort}.json?limit=25`);
    }
    else if(sort === 'top'){
        response = await axios.get(`https://www.reddit.com/r/${subreddit}/${sort}/.json?limit=25&t=all&count=25`);
    }
    return clearUnwantedData(await response.data.data);
});

export const fetchAfterApi = createAsyncThunk("api/fetchAfterApi", async ({subreddit = "pics", sort = "hot" , payload}) => {
    let response;
    if(sort !== 'top'){
        response = await axios.get(`https://www.reddit.com/r/${subreddit}/${sort}.json?limit=25&after=${payload}`);
    }
    else if(sort === 'top'){
        response = await axios.get(`https://www.reddit.com/r/${subreddit}/${sort}/.json?limit=25&t=all&count=25&after=${payload}`);
    }
    return clearUnwantedData(await response.data.data);
});

export const clearUnwantedData = (response) => {
    let data = {
        after: response.after,
        children: []
    };
    response.children.forEach((item) => {
        if (item.data.is_video === true) {
            data.children.push(
                {
                    url: item.data.media.reddit_video.fallback_url,
                    type: "video"
                }
            );
        }
        else if (item.data.is_gallery === true) {
            const metadata = item.data.media_metadata;
            Object.values(metadata).forEach((value) => {
                if (value.p && value.p[0].u) {
                    value.p[0].u.includes('preview.redd.it')
                        ? data.children.push(
                            {
                                url: value.p[0].u.replace('preview.redd.it', 'i.redd.it'),
                                type: "image"
                            }
                        ) 
                        : data.children.push(
                            {
                                url: value.p[0].u,
                                type: "image"
                            }
                        );
                }
            });
        }
        else if (item.data.post_hint === "image") {
            data.children.push(
                {
                    url: item.data.url_overridden_by_dest,
                    type: "image"
                }
            );
        }
    });
    return data;
}




export const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApi.pending, (state) => {
            state.status = "loading";
        })
        builder.addCase(fetchApi.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
            state.afterCode = action.payload.after
        })
        builder.addCase(fetchApi.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        builder.addCase(fetchAfterApi.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = [];
            state.data = action.payload;
            state.afterCode = action.payload.after
        })
        builder.addCase(fetchSearchResults.fulfilled, (state,action) => {
            state.searchResult = action.payload;
        })
    }
});

export default apiSlice.reducer;
export const { } = apiSlice.actions;
export const selectApiData = (state) => state.api.data;
