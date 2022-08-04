import axios from "axios"
import { JOIN_CLASS, JOIN_CLASS_ERROR, CREATE_CLASSS_SUCCESS, CREATE_CLASSS_ERROR } from "../actionTypes/classActionTypes";
import uuid from 'react-uuid'
import { UPDATE_LOCAL_CURRENT_CLASS } from "../actionTypes/authActionTypes";

export const joinClass = (classCode) => {
    return async (dispatch, getState) => {
        const state = getState();
        const email = state.auth.profile.email
        try {
            const response = await axios.post('http://127.0.0.1:8000/student/student-classroom', {
                "uid": uuid(),
                "student": email,
                "class_room": classCode
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

        try {
            const { className, section, subjectCode, branch } = classAbout;

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

export const updateCurrentClass = (classData) => {
    return async (dispatch, getState) => {
        console.log(classData, 'classData');
        dispatch({ type: UPDATE_LOCAL_CURRENT_CLASS, payload: classData })
    }
}