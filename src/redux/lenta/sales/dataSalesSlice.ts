import { createSlice } from '@reduxjs/toolkit';

const dataSalesSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    setDataSales: (state, action) => {
      return action.payload;
    },
  },
});

export const dataSalesActions = dataSalesSlice.actions;
export default dataSalesSlice.reducer;