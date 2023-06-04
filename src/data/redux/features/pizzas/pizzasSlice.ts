import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPizza } from "types";

export interface IPizzaState {
  pizzas: IPizza[];
}

export type PizzaAction = PayloadAction<IPizza[]>;

const initialState: IPizzaState = {
  pizzas: [],
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    get: (state, action: PizzaAction) => {
      state.pizzas = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { get } = pizzasSlice.actions;

export default pizzasSlice.reducer;
