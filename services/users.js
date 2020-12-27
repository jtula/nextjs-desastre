import axios from "utils/axios"

export default function login({ email, password }) {
  return axios
    .post("/auth/login", { email, password })
    .then((response) => {
      if (response.status === 200) return response.data
    })
    .catch((error) => {
      const message =
        error.response && error.response.data
          ? error.response.data.message
          : "Something wrong happen!"
      throw new Error(message)
    })
}

export function register(user) {
  return axios
    .post("/auth/register", user)
    .then((response) => response.data)
    .catch((error) => console.error(error))
}
