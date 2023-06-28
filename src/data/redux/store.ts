import { configureStore } from "@reduxjs/toolkit";

import pizzasReducer from "./features/pizzas/pizzasSlice";

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
  },
  // get store from LocalStorage
  preloadedState: loadFromLocalStorage(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

function saveToLocalStorage(state: RootState) {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialState);
  } catch (e) {
    console.warn(e);
  }
}

// save to localStorage, when change store
store.subscribe(() => saveToLocalStorage(store.getState()));

export { store };

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
