import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPizza } from "types";

export interface IPizzaState {
  pizzas: IPizza[];
  basket: IPizza[];
}

export type PizzaAction = PayloadAction<IPizza[]>;
export type AddToBasketAction = PayloadAction<IPizza>;

const initialState: IPizzaState = {
  pizzas: [],
  basket: [],
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    get: (state, action: PizzaAction) => {
      state.pizzas = action.payload;
    },
    addToBasket: (state, action: AddToBasketAction) => {
      // action.payload.count = action.payload.count === undefined ? 1 : action.payload.count + 1;
      // action.payload.count = 11111;
      state.basket.push(action.payload);
      // state.basket.push(Object.assign(action.payload, {count: 1111}));
    },
  },
});

// Action creators are generated for each case reducer function
export const { get, addToBasket } = pizzasSlice.actions;

export default pizzasSlice.reducer;
