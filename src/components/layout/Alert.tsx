import { useDispatch, useSelector } from "react-redux"

import {
  removeAlert,
  selectCurrentAlert,
} from "../../context/slices/AlertSlice"

export default function Alert() {
  const { message, time } = useSelector(selectCurrentAlert)
  const dispatch = useDispatch()

  setTimeout(() => dispatch(removeAlert()), time || 1500)

  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-4"
      style={{ visibility: message ? "visible" : "hidden" }}
    >
      <div className="alert alert-error">
        <div>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
          <strong>{message}</strong>
        </div>
      </div>
    </div>
  )
}
