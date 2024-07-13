import {apiReducer} from './apiSlice';
import {configureStore} from '@reduxjs/toolkit';
import {dataReducer} from './dataSlice';

const store = configureStore({
  reducer: {
    api: apiReducer,
    data: dataReducer,
  },
});

export default store;
