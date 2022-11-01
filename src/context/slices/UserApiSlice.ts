import { UserSearchResult } from "../../contracts/UserSearchResult"
import { User } from "../../models/User"
import { UserRepo } from "../../models/UserRepo"
import ApiSlice from "./ApiSlice"

export const UserApiSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchUsers: builder.query<UserSearchResult, string>({
      query: (query) => ({
        url: "/search/users",
        params: { q: query },
      }),
    }),
    getUserByLogin: builder.query<User, string>({
      query: (login) => `/users/${login}`,
    }),
    getUserRepos: builder.query<UserRepo, string>({
      query: (login) => ({
        url: `/users/${login}/repos`,
        params: {
          sort: "created",
          per_page: 10,
        },
      }),
    }),
  }),
})

export const {
  useLazySearchUsersQuery,
  useLazyGetUserByLoginQuery,
  useLazyGetUserReposQuery,
  useGetUserByLoginQuery,
} = UserApiSlice
