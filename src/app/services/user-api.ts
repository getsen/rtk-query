import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { User } from "../../types/User";

const baseURL = "https://jsonplaceholder.typicode.com";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
