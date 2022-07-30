import { SpellcheckOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown";
import Header from "../../components/Header/Header";
import JoinedClasses from "../../components/JoinedClasses/JoinedClasses";
import "./style.css"
const Classes = () => {

    const [classesArray_, setClasses] = useState([]);
    
    useEffect(() => {
        (async () => {
            const response = await axios.get('http://127.0.0.1:8000/department/classroom',
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
            // console.log(response.data)
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
            id: 1234,
            owner: 'prashant@gmail.com',
            className: 'First Class'
        },
    ]

    return (
        <>
            <Header />
            {classesArray_.map(classData => (
                <JoinedClasses classData={classData} />
            ))}
            <SpeedDialTooltipOpen />
        </>
    )
}

export default Classes