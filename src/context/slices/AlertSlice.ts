import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AlertState } from "../../contracts/AlertState"
import { RootState } from "../AppStore"

const initialState: AlertState = {
  message: undefined,
  type: undefined,
  time: undefined,
}

export const AlertSlice = createSlice({
  name: "AlertSlice",
  initialState,
  reducers: {
    setAlert: (_, { payload }: PayloadAction<AlertState>) => payload,
    removeAlert: () => initialState,
  },
})

export const { setAlert, removeAlert } = AlertSlice.actions

export default AlertSlice.reducer

export const selectCurrentAlert = (state: RootState) => state.alert
