import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPizza, IPizzaBasket } from "types";

export interface IPizzaState {
  pizzas: { list: IPizza[]; isLoaded: boolean };
  basket: { list: IPizza[]; count: number; sum: number; isLoaded: boolean };
}

export type PizzaAction = PayloadAction<IPizza[]>;
export type AddToBasketAction = PayloadAction<number>;
export type IncreasePizzaCountAction = PayloadAction<number>;
export type DecreasePizzaCountAction = PayloadAction<number>;
export type RemovePizzaAction = PayloadAction<number>;
export type SetIsPizzaListLoadedAction = PayloadAction<boolean>;

const initialState: IPizzaState = {
  pizzas: { list: [], isLoaded: false },
  basket: {
    list: [],
    count: 0,
    sum: 0,
    isLoaded: true,
  },
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    get: (state, action: PizzaAction) => {
      state.pizzas.list = action.payload;
    },
    setIsPizzaListLoaded: (state, action: SetIsPizzaListLoadedAction) => {
      state.pizzas.isLoaded = action.payload;
    },
    addToBasket: (state, action: AddToBasketAction) => {
      let idx = state.basket.list.findIndex(
        (item) => item.id === action.payload
      );
      if (idx !== -1) {
        // если пицца есть в корзине, прибавляем кол-во
        state.basket.list[idx].count =
          (state.basket.list[idx] as IPizzaBasket).count + 1;
        state.basket.list[idx].sum =
          (state.basket.list[idx] as IPizzaBasket).sum + state.basket.list[idx].price;
        state.basket.sum = state.basket.sum + state.basket.list[idx].price;
      } else {
        const foundPizza = state.pizzas.list.find(
          (pizza) => pizza.id === action.payload
        );
        if (foundPizza)
          state.basket.list.push({
            ...foundPizza,
            count: 1,
            sum: foundPizza.price,
          });
        state.basket.sum += (foundPizza as IPizzaBasket)?.price;
      }
      state.basket.count += 1;
    },
    increasePizzaCount: (state, action: IncreasePizzaCountAction) => {
      const idx = state.basket.list.findIndex(
        (item) => item.id === action.payload
      );
      if (idx !== -1) {
        state.basket.list[idx].count =
          (state.basket.list[idx] as IPizzaBasket).count + 1;
        state.basket.list[idx].sum =
          (state.basket.list[idx] as IPizzaBasket).sum + state.basket.list[idx].price;
        state.basket.sum = state.basket.sum + state.basket.list[idx].price;
        state.basket.count += 1;
      }
    },
    decreasePizzaCount: (state, action: DecreasePizzaCountAction) => {
      const idx = state.basket.list.findIndex(
        (item) => item.id === action.payload
      );
      if (idx !== -1) {
        if ((state.basket.list[idx] as IPizzaBasket).count > 1) {
          state.basket.list[idx].count =
            (state.basket.list[idx] as IPizzaBasket).count - 1;

          state.basket.list[idx].sum =
            (state.basket.list[idx] as IPizzaBasket).sum -
            state.basket.list[idx].price;

          state.basket.count -= 1;
          state.basket.sum -= state.basket.list[idx].price;
        } else {
          // блочим кнопку минусования
        }
      }
    },
    removePizza: (state, action: RemovePizzaAction) => {
      // ищем индекс и удаляем
      const idx = state.basket.list.findIndex(
        (item) => item.id === action.payload
      );

      if (idx !== -1) {
        state.basket.count =
          state.basket.count - (state.basket.list[idx] as IPizzaBasket)?.count;
        state.basket.sum =
          state.basket.sum - (state.basket.list[idx] as IPizzaBasket).sum;
      }
      state.basket.list.splice(idx, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  get,
  setIsPizzaListLoaded,
  addToBasket,
  increasePizzaCount,
  decreasePizzaCount,
  removePizza,
} = pizzasSlice.actions;

export default pizzasSlice.reducer;
