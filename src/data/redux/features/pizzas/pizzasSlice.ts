import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IPizza, IPizzaBasket } from "types";

export interface IPizzaState {
  pizzas: { list: IPizza[]; isLoaded: boolean };
  basket: { list: IPizza[]; count: number; sum: number; isLoaded: boolean };
}

// interface AddToBasketPayload {
//   // id: number;
//   item: any
//   // type: string;
//   // size: number;
// }

export type PizzaAction = PayloadAction<IPizza[]>;
// export type AddToBasketAction = PayloadAction<AddToBasketPayload>;
export type AddToBasketAction = PayloadAction<any>;
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
      // // https://www.youtube.com/watch?v=RhOvu20t0Go&list=PL0FGkDGJQjJG9eI85xM1_iLIf6BcEdaNl&index=17
      // // если одинаковое тесто, но разный размер - отдельная пиццв; если один размер, но разное тесто - тоже другая
      // const idx = state.basket.list.findIndex(
      //   (item) =>
      //     item.id === action.payload.id && item.type === action.payload.type
      //   // || item.id === action.payload.id && item.size === action.payload.size
      // );
      // console.log(`idx ${idx}`); // 0 (надо что ли как-то разделить тип теста и размер)
      // if (idx !== -1) {
      //   state.basket.list[idx].count =
      //     (state.basket.list[idx] as IPizzaBasket).count + 1;
      // } else {
      //   const foundPizza = state.pizzas.list.find(
      //     (pizza) => pizza.id === action.payload.id
      //   );
      //   if (foundPizza)
      //     state.basket.list.push({
      //       ...foundPizza,
      //       count: 1,
      //       sum: foundPizza.price,
      //       type: action.payload.type,
      //       size: action.payload.size,
      //     });
      //   state.basket.sum += (foundPizza as IPizzaBasket)?.price || 0;
      // }

      // state.basket.count += 1;
      
      
      
      
      // state.basket.list.push(action.payload.item);
      // state.basket.sum = state.basket.list.reduce((sum, obj) => obj.price + sum, 0);
      // state.basket.count += 1;

      const foundItem = state.basket.list.find((item) => item.id === action.payload.id);

      if(foundItem){
        foundItem.count =
          (foundItem as IPizzaBasket).count + 1;
      } else {
        state.basket.list.push({...action.payload, count: 1,});
        
      }

      // TODO: add types
      state.basket.sum = state.basket.list.reduce((sum, obj: any) => (obj.price * obj.count) + sum, 0);
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
  setIsPizzaListLoaded,
  addToBasket,
  increasePizzaCount,
  decreasePizzaCount,
  removePizza,
  cleanBasket,
} = pizzasSlice.actions;

export default pizzasSlice.reducer;
