import {
  fetchMovies,
  fetchSearchResults,
  fetchGenres,
  fetchMovieDetails,
  fetchTrending,
} from './apiThunks';

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  searchResults: [],
  searchLoading: false,
  searchError: null,

  moviesData: null,
  moviesLoading: false,
  moviesError: null,

  genres: [],
  genre_loading: false,
  genre_error: null,

  detail: null,
  detail_loading: false,
  detail_error: null,

  trending: [],
  trend_load: false,
  trend_error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setSearch: (state, {payload}) => {
      return {
        ...state,
        searchResults: payload,
      };
    },
  },
  extraReducers: builder => {
    builder

      // cases for fetchSearchResults
      .addCase(fetchSearchResults.pending, state => {
        state.searchLoading = true;
        state.searchError = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.searchLoading = false;
        state.searchError = action.error.message;
      })
      // cases for fetchMoviesData
      .addCase(fetchMovies.pending, state => {
        state.moviesLoading = true;
        state.moviesError = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.moviesLoading = false;
        state.moviesData = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.moviesLoading = false;
        state.moviesError = action.error.message;
      })

      // cases for Genres
      .addCase(fetchGenres.pending, state => {
        state.genre_loading = true;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genre_loading = false;
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.genre_loading = false;
        state.error = action.error.message;
      })

      // cases for movie details
      .addCase(fetchMovieDetails.pending, state => {
        state.detail_loading = true;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.detail_loading = false;
        state.detail = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.detail_loading = false;
        state.detail_error = action.error.message;
      })

      // case for trending
      .addCase(fetchTrending.pending, state => {
        state.trend_load = true;
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.trend_load = false;
        state.trending = action.payload;
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.trend_load = false;
        state.trend_error = action.error.message;
      });
  },
});
export const {setSearch} = apiSlice.actions;
export const apiReducer = apiSlice.reducer;
