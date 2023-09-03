import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../../app/services/user-api";
import { User } from "../../types/User";

const initialState: { users: User[] } = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      usersApi.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {
        console.log("on matchFulfilled");
        state.users = payload;
      }
    );
  },
});

export default usersSlice.reducer;
