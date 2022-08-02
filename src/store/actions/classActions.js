import axios from "axios"
import { JOIN_CLASS, JOIN_CLASS_ERROR, CREATE_CLASSS_SUCCESS, CREATE_CLASSS_ERROR } from "../actionTypes/classActionTypes";
import uuid from 'react-uuid'

export const joinClass = (email, password) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                "email": email,
                "password": password
            })
            dispatch({ type: JOIN_CLASS, payload: response.data })
        } catch (err) {
            dispatch({ type: JOIN_CLASS_ERROR, payload: err.response })
        }
    }
}

export const createClass = (classAbout) => {
    return async (dispatch, getState) => {
        const state = getState();
        const faculty_id = state.auth.profile.email;
        const faculty_email = state.auth.profile.email;
        console.log(`SecretAuth ${sessionStorage.getItem('access')}`)
        try {
            const { className, section, subjectCode, branch } = classAbout;
            // console.log(classAbout);
            const response = await axios.post('http://127.0.0.1:8000/department/classroom', {
                classroom_code: uuid(),
                faculty_id,
                subject: subjectCode,
                class_name: className,
                branch,
                section,
                faculty_email
            }, {
                headers: {
                    Authorization: sessionStorage.getItem('access')
                        ? `SecretAuth ${sessionStorage.getItem('access')}`
                        : null,
                    'Content-Type': 'application/json',
                    accept: 'application/json'
                }
            })
            dispatch({ type: CREATE_CLASSS_SUCCESS, payload: response.data })
        } catch (err) {
            dispatch({ type: CREATE_CLASSS_ERROR, payload: err })
        }
    }
}