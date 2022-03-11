const BASE_URL = "https://ntdung-laravel-dac.herokuapp.com/api"
// const BASE_URL = "http://127.0.0.1:8000/api"

export const loginApi = BASE_URL + "/auth/login"

export const logoutApi = BASE_URL + "/auth/logout"

export const registerApi = BASE_URL + "/auth/register"

export const getUserProfileApi = BASE_URL + "/auth/user-profile"

export const AUTH_API = {
  loginApi,
  logoutApi,
  registerApi,
  getUserProfileApi
}