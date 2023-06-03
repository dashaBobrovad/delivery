import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzas: [],
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    get: (state, action) => {
      state.pizzas = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { get } =
pizzasSlice.actions;

export default pizzasSlice.reducer;
