import {createAsyncThunk} from '@reduxjs/toolkit';
import {makeRequest} from '../networking/api';

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
  const data = await makeRequest('/genre/movie/list');
  return data.genres;
});

export const fetchMovieDetails = createAsyncThunk(
  'movie/fetchMovieDetails',
  async movieId => {
    const data = await makeRequest(`/movie/${movieId}`);
    return data;
  },
);

export const fetchSearchResults = createAsyncThunk(
  'movies/searchMovies',
  async query => {
    const data = await makeRequest('/search/movie', {query, page: 1});
    return data.results.slice(0, 10);
  },
);

export const fetchTrending = createAsyncThunk(
  'movies/fetchTrending',
  async (timeWindow = 'day') => {
    const data = await makeRequest(`/trending/movie/${timeWindow}`);
    return data.results.slice(0, 20);
  },
);

export const fetchMovies = createAsyncThunk('api/fetchMovies', async () => {
  const data = await makeRequest('/movie/upcoming', {page: 1});
  return data.results.slice(0, 20);
});
