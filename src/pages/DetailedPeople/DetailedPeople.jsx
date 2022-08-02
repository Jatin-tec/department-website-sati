import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Avatar from '@mui/material/Avatar';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import "./style.css"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DetailedPeople = () => {

    return <main className="MainCointainer">
        <div className="TeacherCointainer">
            <div className="TeacherCointainerData">
                <h2 className="Teachers-Students">Teachers</h2>
                <div className="Three-Dots"><span><PersonAddAltIcon color="action"/></span></div>
            </div>
            <table className="TeacherTable">
                <tbody>
                    <tr className="Teacher-tr">
                    <td>
                        <div className="Teacher-tr-div">
                            <span className="TeacherAvatar"><Avatar/></span>
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
                <div className="Three-Dots"><span><PersonAddAltIcon color="action"/></span></div>
            </div>
            <table className="TeacherTable">
                <tbody>
                    <tr className="Teacher-tr">
                    <td>
                        <div className="Teacher-tr-div">
                            <span className="TeacherAvatar"><Avatar/></span>
                            <span className="TeachersName">Jatin Kshatriya</span>
                        </div>
                        </td>
                        </tr>
                </tbody>
                <tbody>
                    <tr className="Teacher-tr">
                    <td>
                        <div className="Teacher-tr-div">
                            <span className="TeacherAvatar"><Avatar/></span>
                            <span className="TeachersName">Prashant Patel</span>
                        </div>
                        </td>
                        </tr>
                </tbody>
                <tbody>
                    <tr className="Teacher-tr">
                    <td>
                        <div className="Teacher-tr-div">
                            <span className="TeacherAvatar"><Avatar/></span>
                            <span className="TeachersName">Hersel Betichod  </span>
                            <div className="DeleteIcon"></div>
                        </div>
                        </td>
                        
                       
                        </tr>
                </tbody>
            </table>
        </div>
    </main>
}

export default DetailedPeople;