import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPizza } from 'types';

export interface IPizzaState {
  list: IPizza[];
}

export type PizzaAction = PayloadAction<IPizza>;

const initialState: IPizzaState = {
  list: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action: PizzaAction) => {
      state.list.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = basketSlice.actions;

export default basketSlice.reducer;
