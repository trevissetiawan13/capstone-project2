import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY; // Get from env variable
const API_ENDPOINT = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export const fetchNews = createAsyncThunk(
  "api/fetchNews",
  async (params, { rejectWithValue }) => {
    try {
      let url = `${API_ENDPOINT}?api-key=${API_KEY}&sort=newest`;
      if (params.query) {
        url += `&q=${params.query}`;
      }
      if (params.country) {
        url += `&fq=glocations:("${params.country.toUpperCase()}")`;
      }
      const response = await axios.get(url);
      if (response.data.status === "OK") {
        return response.data.response.docs;
      } else {
        return rejectWithValue("Failed to fetch news.");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState: {
    news: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default apiSlice.reducer;
