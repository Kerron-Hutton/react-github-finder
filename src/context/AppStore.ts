import { configureStore } from "@reduxjs/toolkit"
import AlertSlice from "./slices/AlertSlice"
import AppSlice from "./slices/AppSlice"
import { UserApiSlice } from "./slices/UserApiSlice"

export const AppStore = configureStore({
  reducer: {
    [UserApiSlice.reducerPath]: UserApiSlice.reducer,
    alert: AlertSlice,
    app: AppSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserApiSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof AppStore.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof AppStore.dispatch
