// reducers.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  show: true,
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setShow: (state, {payload}) => {
      return {
        ...state,
        show: payload,
      };
    },
  },
});

export const {setShow} = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
