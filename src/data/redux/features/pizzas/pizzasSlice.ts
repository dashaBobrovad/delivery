import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IPizza } from "types";

export interface IPizzaState {
  pizzas: IPizza[];
  basket: IPizza[];
}

export type PizzaAction = PayloadAction<IPizza[]>;
export type AddToBasketAction = PayloadAction<number>;

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
      let idx = state.basket.findIndex((item) => item.id === action.payload);
      if (idx !== -1)
        state.basket[idx].count = state.basket[idx].count as number + 1;
      else {
        const foundPizza = state.pizzas.find((pizza => pizza.id === action.payload));
        if (foundPizza)
          state.basket.push({...foundPizza, count: 1});
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { get, addToBasket } = pizzasSlice.actions;

export default pizzasSlice.reducer;
