import React, { useEffect } from "react";
import "./style.css"

import Avatar from '@mui/material/Avatar';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { updateHeaderTitle } from "../../store/actions/headerActionState";

import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

const People = (props) => {

    const params = useParams();
    useEffect(() => {
        const pages = [
            {
              title: 'Stream',
              path: `/stream/${params.code}`
            },
            {
              title: 'Classwork',
              path: `/classes`
            },
            {
              title: 'People',
              path: `/peoples/${params.code}`
            },
            {
              title: 'Attendence',
              path: `/attendence/${params.code}`
            },
            {
              title: 'Marks',
              path: `/evalute/${params.code}`
            }
          ];
        (async () => {
            props.updateHeader(pages)
        })()
    })

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
                                    <span className="TeachersName">Himanshu sir</span>
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
                    <tbody>
                        <tr className="Teacher-tr">
                            <td>
                                <div className="Teacher-tr-div">
                                    <span className="TeacherAvatar"><Avatar /></span>
                                    <span className="TeachersName">Jatin Kshatriya</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="Teacher-tr">
                            <td>
                                <div className="Teacher-tr-div">
                                    <span className="TeacherAvatar"><Avatar /></span>
                                    <span className="TeachersName">Prashant Patel</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="Teacher-tr">
                            <td>
                                <div className="Teacher-tr-div">
                                    <span className="TeacherAvatar"><Avatar /></span>
                                    <span className="TeachersName">Hersel Betichod  </span>
                                    <div className="DeleteIcon"></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
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