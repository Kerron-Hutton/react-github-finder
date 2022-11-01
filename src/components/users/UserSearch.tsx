import { FormEvent, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setAlert } from "../../context/slices/AlertSlice"
import { useLazySearchUsersQuery } from "../../context/slices/UserApiSlice"

import {
  clearUserSearchResult,
  setLoadingState,
  setUserSearchResult,
} from "../../context/slices/AppSlice"

export default function UserSearch() {
  const [searchResultCount, setSearchResultCount] = useState(0)
  const [text, setText] = useState("")

  const [triggerUserSearch] = useLazySearchUsersQuery()
  const dispatch = useDispatch()

  const handleClearResult = () => {
    dispatch(clearUserSearchResult())
    setSearchResultCount(0)
  }

  useEffect(handleClearResult, [])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (text === "") {
      dispatch(setAlert({ message: "Please enter something", type: "ERROR" }))
      return
    }

    dispatch(setLoadingState(true))

    const { data } = await triggerUserSearch(text)

    dispatch(setUserSearchResult(data))

    setSearchResultCount(data ? data.items.length : 0)
    setText("")
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                onChange={(event) => setText(event.target.value)}
                placeholder="Search"
                value={text}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {searchResultCount > 0 && (
        <div>
          <button
            onClick={handleClearResult}
            className="btn btn-ghost btn-lg"
            type="submit"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}
