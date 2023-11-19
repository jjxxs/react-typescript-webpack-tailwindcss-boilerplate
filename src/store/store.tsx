import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import Counter from "./model/counter";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const loggerMiddleware = createLogger();

export const store = configureStore({
  reducer: {
    counter: Counter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export type StoreState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<StoreState> = useSelector;
