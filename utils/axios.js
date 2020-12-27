import axios from "axios"

const headers = {
  "Content-Type": "application/json",
}

export const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers,
})

instance.CancelToken = axios.CancelToken
instance.isCancel = axios.isCancel

export default instance
