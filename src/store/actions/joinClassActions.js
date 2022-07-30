import axios from "axios"
import { JOIN_CLASS, JOIN_CLASS_ERROR } from "../actionTypes/joinClassActionTypes";

export const singin = (email, password) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                "email": email,
                "password": password
            })
            dispatch({ type: JOIN_CLASS, payload: response.data })
        } catch (err) {
            dispatch({ type: JOIN_CLASS, payload: err.response })
        }
    }
}