import { configureStore } from "@reduxjs/toolkit";
import pizzasReducer from "./features/pizzas/pizzasSlice";

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch