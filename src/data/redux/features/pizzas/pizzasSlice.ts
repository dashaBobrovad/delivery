import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IPizza, IPizzaBasket } from "types";

export interface IPizzaState {
  pizzas: { list: IPizza[]; isLoaded: boolean; filteredList: IPizza[] };
  basket: { list: IPizza[]; count: number; sum: number; isLoaded: boolean };
}

interface AddToBasketPayload {
  id: number;
  type: string;
  size: number;
}

export interface IPizzaSort {
  type: string;
  id: number;
}

export type PizzaAction = PayloadAction<IPizza[]>;
// export type SortPizzaAction = PayloadAction<IPizzaSort>;
export type SortPizzaAction = PayloadAction<any>;
export type AddToBasketAction = PayloadAction<AddToBasketPayload>;
export type IncreasePizzaCountAction = PayloadAction<number>;
export type DecreasePizzaCountAction = PayloadAction<number>;
export type RemovePizzaAction = PayloadAction<number>;
export type SetIsPizzaListLoadedAction = PayloadAction<boolean>;

const initialState: IPizzaState = {
  pizzas: { list: [], isLoaded: false, filteredList: [] },
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
    sort: (state, action: SortPizzaAction) => {
      let filteredPizzas = [];

      if(action.payload.filter !== 0){
        filteredPizzas = state.pizzas.list.filter(
          (item) => item.category === action.payload.filter
        );
      } else {
        filteredPizzas = state.pizzas.list;
      }

      let resSort = "";
      switch (action.payload.sort) {
        case 0:
          resSort = "rating";
          break;
        case 1:
          resSort = "price";
          break;
        default:
          break;
      }

      // TODO: избавиться от дублирования
      if (action.payload.sort === 0) {
        filteredPizzas.sort(
          (a, b) =>
            // Number(a?[resSort as keyof IPizza]:0) - Number(b?[resSort as keyof IPizza]:0) - incorrect
            +(b as any)[resSort as keyof IPizza] -
            +(a as any)[resSort as keyof IPizza]
        );
      }

      if (action.payload.sort === 1) {
        filteredPizzas.sort(
          (a, b) =>
            // Number(a?[resSort as keyof IPizza]:0) - Number(b?[resSort as keyof IPizza]:0) - incorrect
            +(a as any)[resSort as keyof IPizza] -
            +(b as any)[resSort as keyof IPizza]
        );
      }

      if (action.payload.sort === 2) {
        filteredPizzas.sort((a, b) => {
          if (
            a.title.toLowerCase() <
            b.title.toLowerCase()
          ) {
            return -1;
          }
          if (
            a.title.toLowerCase()>
            b.title.toLowerCase()
          ) {
            return 1;
          }
          return 0;
        });
      }

      state.pizzas.filteredList = filteredPizzas;
    },
    setIsPizzaListLoaded: (state, action: SetIsPizzaListLoadedAction) => {
      state.pizzas.isLoaded = action.payload;
    },
    addToBasket: (state, action: AddToBasketAction) => {
      const idx = state.basket.list.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.type === action.payload.type &&
          item.size === action.payload.size
      );

      if (idx !== -1) {
        state.basket.list[idx].count =
          (state.basket.list[idx] as IPizzaBasket).count + 1;
      } else {
        const foundPizza = state.pizzas.list.find(
          (pizza) => pizza.id === action.payload.id
        );
        if (foundPizza)
          state.basket.list.push({
            ...foundPizza,
            count: 1,
            sum: foundPizza.price,
            type: action.payload.type,
            size: action.payload.size,
          });
      }

      state.basket.sum = state.basket.list.reduce(
        (sum, obj) => obj.price * (obj.count as number) + sum,
        0
      );
      state.basket.count += 1;
    },
    increasePizzaCount: (state, action: IncreasePizzaCountAction) => {
      // TODO: избавиться от этого экшена - доверить все addItem
      const idx = state.basket.list.findIndex(
        (item) => item.id === action.payload
      );
      if (idx !== -1) {
        state.basket.list[idx].count =
          (state.basket.list[idx] as IPizzaBasket).count + 1;
        state.basket.list[idx].sum =
          (state.basket.list[idx] as IPizzaBasket).sum +
          state.basket.list[idx].price;
        state.basket.sum += state.basket.list[idx].price;
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
        state.basket.count -=
          (state.basket.list[idx] as IPizzaBasket)?.count || 0;
        state.basket.sum -= (state.basket.list[idx] as IPizzaBasket).sum;
      }
      state.basket.list.splice(idx, 1);
    },
    cleanBasket: (state) => {
      state.basket.list = [];
      state.basket.count = 0;
      state.basket.sum = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  get,
  sort,
  setIsPizzaListLoaded,
  addToBasket,
  increasePizzaCount,
  decreasePizzaCount,
  removePizza,
  cleanBasket,
} = pizzasSlice.actions;

export default pizzasSlice.reducer;
