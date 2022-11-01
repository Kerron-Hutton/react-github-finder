import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppState } from "../../contracts/AppState"
import { UserSearchResult } from "../../contracts/UserSearchResult"
import { User } from "../../models/User"
import { UserRepo } from "../../models/UserRepo"
import { RootState } from "../AppStore"

type SearchResultAction = PayloadAction<UserSearchResult | undefined>

const initialState: AppState = {
  userSearchResult: undefined,
  currentUser: undefined,
  currentUserRepos: [],
  loading: false,
}

export const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    clearUserSearchResult: () => initialState,

    setLoadingState: (state, { payload }: PayloadAction<boolean>) =>
      Object.assign(state, { loading: payload }),

    setUserSearchResult: (state, { payload }: SearchResultAction) =>
      Object.assign(state, { userSearchResult: payload, loading: false }),

    setCurrentUser: (state, { payload }: PayloadAction<User>) =>
      Object.assign(state, { currentUser: payload, loading: false }),

    setCurrentUserRepo: (state, { payload }: PayloadAction<UserRepo>) =>
      Object.assign(state, { currentUserRepos: payload, loading: false }),
  },
})

export const {
  clearUserSearchResult,
  setUserSearchResult,
  setCurrentUserRepo,
  setLoadingState,
  setCurrentUser,
} = AppSlice.actions

export default AppSlice.reducer

export const selectUserSearchResult = (state: RootState) =>
  state.app.userSearchResult

export const selectCurrentUser = (state: RootState) => state.app.currentUser

export const selectCurrentUserRepo = (state: RootState) =>
  state.app.currentUserRepos

export const selectIsLoading = (state: RootState) => state.app.loading
