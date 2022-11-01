import { User } from "../models/User"

export interface UserSearchResult {
  incomplete_results: boolean
  total_count: number
  items: User[]
}
