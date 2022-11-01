export interface AlertState {
  type?: "ERROR" | "SUCCESS"
  message?: string
  time?: number
}
