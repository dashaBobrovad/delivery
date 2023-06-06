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
      // console.log('addToBasket')
      // console.log(action.payload.count)
      // let count = action.payload.count === undefined ? 1 : action.payload.count + 1;
      // console.log(count)
      // state.basket.push(Object.assign({count: count}, action.payload));
      // state.basket.push(action.payload);
      let count = action.payload.count === undefined ? 1 : action.payload.count + 1;
      //state.pizzas.push(Object.assign({count: count}, action.payload));
      let pizza = state.pizzas.find(item => item.id === action.payload.id);
      Object.assign({count: count}, pizza)
    }
  },
});

// Action creators are generated for each case reducer function
export const { get, addToBasket } = pizzasSlice.actions;

export default pizzasSlice.reducer;
