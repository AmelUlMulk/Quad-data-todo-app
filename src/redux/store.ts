/* eslint-disable @typescript-eslint/ban-ts-comment */
import { configureStore } from "@reduxjs/toolkit"
import TodoReducer from "./todoReducer"
// @ts-ignore
export const store = configureStore({
  devTools: {
    trace: true,
  },
  reducer: { todos: TodoReducer },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
