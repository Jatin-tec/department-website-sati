import { SpellcheckOutlined } from "@mui/icons-material";
import React from "react";
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown";
import Header from "../../components/Header/Header";
import JoinedClasses from "../../components/JoinedClasses/JoinedClasses";
import "./style.css"
const Classes = () => {
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
            {classesArray.map(classData => (
                <JoinedClasses classData={classData}/>
            ))}
            <SpeedDialTooltipOpen />
        </>
    )
}

export default Classes