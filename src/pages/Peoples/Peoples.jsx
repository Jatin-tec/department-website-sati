import React, { useEffect } from "react";
import "./style.css"

import Avatar from '@mui/material/Avatar';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { updateHeaderTitle } from "../../store/actions/headerActionState";

import { connect, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

const People = (props) => {

    useEffect(() => {
    }, [])

    const firstName = useSelector(state => state.auth.profile.firstName)
    const lastName = useSelector(state => state.auth.profile.lastName)
    const students = useSelector(state => state.classReducer.currentClass.students)

    return (
        <main className="Main-Cointainer">
            <div className="TeacherCointainer">
                <div className="TeacherCointainerData">
                    <h2 className="Teachers-Students">Teachers</h2>
                    <div className="Three-Dots"><span><PersonAddAltIcon color="action" /></span></div>
                </div>
                <table className="TeacherTable">
                    <tbody>
                        <tr className="Teacher-tr">
                            <td>
                                <div className="Teacher-tr-div">
                                    <span className="TeacherAvatar"><Avatar /></span>
                                    <span className="TeachersName">{`${firstName} ${lastName}`}</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="TeacherCointainer">
                <div className="TeacherCointainerData">
                    <h2 className="Teachers-Students">Students</h2>
                    <div className="Three-Dots"><span><PersonAddAltIcon color="action" /></span></div>
                </div>
                <table className="TeacherTable">
                    {students &&
                        students.map(student => (
                            <tbody key={student.user.email}>
                                <tr className="Teacher-tr">
                                    <td>
                                        <div className="Teacher-tr-div">
                                            <span className="TeacherAvatar"><Avatar /></span>
                                            <span className="TeachersName">{student.user.email}</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        </main>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateHeader: (titles) => dispatch(updateHeaderTitle(titles))
    }
}

export default connect(null, mapDispatchToProps)(People)