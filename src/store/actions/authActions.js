import axios from "axios"
import { SIGNIN_ERROR, SIGNIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_ERROR } from "../actionTypes/authActionTypes"

export const singin = (email, password) => {
    return async (dispatch, getState) => {

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                "email": email,
                "password": password
            })
            sessionStorage.setItem('access', response.data.access)
            sessionStorage.setItem('refresh', response.data.refresh)
            sessionStorage.setItem('profile', response.data.profile)

            dispatch({ type: SIGNIN_SUCCESS, payload: response.data })
        } catch (err) {
            dispatch({ type: SIGNIN_ERROR, payload: err.response })
        }

    }
}

export const logout = () => {
    return async (dispatch, getState) => {

        try {
            const response = await axios.post('http://127.0.0.1:8000/department/logout/blacklist', {
                refresh_token: sessionStorage.getItem("refresh"),
            });
            console.log(response);
            sessionStorage.clear();
            dispatch({ type: LOGOUT_SUCCESS, payload: response })
        } catch (err) {
            dispatch({ type: LOGOUT_ERROR, payload: err })
        }

    }
}