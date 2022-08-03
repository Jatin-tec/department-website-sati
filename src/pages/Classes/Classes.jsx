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

    const [classesArray, setClasses] = useState([]);
    const userEmail = useSelector(state => state.auth.profile.email);

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
            props.updateHeader(pages);    
        })()
    }, [])

    return (
        <>
            {classesArray.map(classData => {
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