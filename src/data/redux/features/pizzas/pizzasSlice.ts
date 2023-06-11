import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPizza } from "types";

export interface IPizzaState {
  pizzas: IPizza[];
  basket: {list: IPizza[], count: number, sum: number};
}

export type PizzaAction = PayloadAction<IPizza[]>;
export type AddToBasketAction = PayloadAction<number>;

const initialState: IPizzaState = {
  pizzas: [],
  basket: {
    list: [],
    count: 0,
    sum: 0,
  },
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    get: (state, action: PizzaAction) => {
      state.pizzas = action.payload;
    },
    addToBasket: (state, action: AddToBasketAction) => {
      let idx = state.basket.list.findIndex((item) => item.id === action.payload);
      if (idx !== -1) {
        // если пицца есть в корзине, прибавляем кол-во
        state.basket.list[idx].count = (state.basket.list[idx].count as number) + 1;
        state.basket.sum = state.basket.sum + state.basket.list[idx].price; 
      } else {
        const foundPizza = state.pizzas.find(
          (pizza) => pizza.id === action.payload
        );
        if (foundPizza)
          state.basket.list.push({ ...foundPizza, count: 1, sum: foundPizza.price });
          state.basket.sum += foundPizza?.price as number;
      }
      state.basket.count += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { get, addToBasket } = pizzasSlice.actions;

export default pizzasSlice.reducer;
