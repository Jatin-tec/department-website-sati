import { SpellcheckOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown";
import Header from "../../components/Header/Header";
import JoinedClasses from "../../components/JoinedClasses/JoinedClasses";
import "./style.css"
import { useSelector } from "react-redux";

const Classes = () => {

    const [classesArray_, setClasses] = useState([]);
    const userEmail = useSelector(state => state.auth.auth.profile.email)

    useEffect(() => {
        (async () => {
            const response = await axios.get(`http://127.0.0.1:8000/department/classroom/${userEmail}`,
                {
                    headers: {
                        Authorization: sessionStorage.getItem('access')
                            ? `SecretAuth ${sessionStorage.getItem('access')}`
                            : null,
                        accept: 'application/json'
                    }
                }
            )
            setClasses(response.data);
        })()
    }, [])

    const classesArray = [
        {
            id: 1234,
            owner: 'prashant@gmail.com',
            className: 'First Class'
        },
        {
            id: 1234,
            owner: 'prashant@gmail.com',
            className: 'First Class'
        },
        {
            id: 1234,
            owner: 'prashant@gmail.com',
            className: 'First Class'
        },
        {
            classroom_code: 723618623534,
            owner: 'prashant@gmail.com',
            class_name: 'First Class'
        },
    ]

    return (
        <>
            <Header />
            {classesArray_.map(classData => {
                return (
                    <JoinedClasses classData={classData} />
                )
            })}
            <SpeedDialTooltipOpen />
        </>
    )
}

export default Classes