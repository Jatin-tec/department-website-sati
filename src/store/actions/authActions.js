import axios from "axios"
import { SIGNIN_ERROR, SIGNIN_SUCCESS } from "../actionTypes/authActionTypes"

export const singin = (email, password) => {
    return async (dispatch, getState) => {
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                "email" : email,
                "password" : password
            })
            dispatch({ type: SIGNIN_SUCCESS, payload: response.data })
        }catch(err){
            dispatch({ type:SIGNIN_ERROR, payload: err.response })
        }
    }
}