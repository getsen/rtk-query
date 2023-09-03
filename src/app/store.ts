import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./services/user-api";
// import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    // users: usersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
