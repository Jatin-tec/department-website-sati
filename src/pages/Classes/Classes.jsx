import axios from "axios";
import React, { useEffect, useState } from "react";
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown";
import JoinedClasses from "../../components/JoinedClasses/JoinedClasses";
import "./style.css"
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { updateHeaderTitle } from "../../store/actions/headerActionState";

const pages = [
    {
        title: 'Home',
        path: '/'
    },
]

const Classes = (props) => {

    const [classesArray_, setClasses] = useState([]);
    const userEmail = useSelector(state => state.auth.auth.profile.email);

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
            const headerTitles = ['Home']
            setClasses(response.data);
            props.updateHeader(pages);    
        })()
    }, [])

    const classesArray = [
        {
            id: 1234,
            owner: 'prashant@gmail.com',
            class_name: 'First Class'
        },
        {
            id: 1234,
            owner: 'prashant@gmail.com',
            class_name: 'First Class'
        },
        {
            id: 1234,
            owner: 'prashant@gmail.com',
            class_name: 'First Class'
        },
        {
            classroom_code: 723618623534,
            owner: 'prashant@gmail.com',
            class_name: 'First Class'
        },
    ]

    return (
        <>
            {classesArray_.map(classData => {
                return (
                    <JoinedClasses classData={classData} />
                )
            })}
            <SpeedDialTooltipOpen />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateHeader: (titles) => dispatch(updateHeaderTitle(titles))
    }
  }
  
export default connect(null, mapDispatchToProps)(Classes)