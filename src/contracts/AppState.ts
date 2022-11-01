import { User } from "../models/User"
import { UserRepo } from "../models/UserRepo"
import { UserSearchResult } from "./UserSearchResult"

export interface AppState {
  userSearchResult?: UserSearchResult
  currentUserRepos: UserRepo[]
  currentUser?: User
  loading: boolean
}
