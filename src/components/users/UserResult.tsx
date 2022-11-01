import { useSelector } from "react-redux"
import LoadingSpinner from "../layout/LoadingSpinner"
import UserItem from "./UserItem"

import {
  selectIsLoading,
  selectUserSearchResult,
} from "../../context/slices/AppSlice"

export default function UserResult() {
  const userSearchResult = useSelector(selectUserSearchResult)
  const loading = useSelector(selectIsLoading)

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="grid grid-col-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {userSearchResult?.items.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}
