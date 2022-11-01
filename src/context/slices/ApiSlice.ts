import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN
const GITHUB_API = import.meta.env.VITE_GITHUB_API_URL

export default createApi({
  endpoints: () => ({}),
  reducerPath: "api",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
    baseUrl: GITHUB_API,
  }),
})
