import React from "react";
import contacts from "../attendence/contacts";
import Print from "./Print";
import Evalute from "./Evalute";
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown";
import "./Style.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Style.css"

function createData(name, Assignment1, Assignment2, Assignment3, Assignment4) {
  return { name, Assignment1, Assignment2, Assignment3, Assignment4 };
}
const Students = [
  createData('Jatin Kshatriya', 90, 75, 80,70,),
  createData('Harshal Rathore', 80, 70, 60,90,),
  createData('Prashant Patel', 81, 80, 70,80,),
  createData('Himanshu Agnihotri', 82, 80, 80,90,),
  createData('Atharv chauhan', 81, 88, 92,91,),
  createData('Jatin Kshatriya', 90, 75, 80,70,),
  createData('Harshal Rathore', 80, 70, 60,90,),
  createData('Prashant Patel', 81, 80, 70,80,),
  createData('Himanshu Agnihotri', 82, 80, 80,90,),
  createData('Atharv chauhan', 81, 88, 92,91,),
  createData('Jatin Kshatriya', 90, 75, 80,70,),
  createData('Harshal Rathore', 80, 70, 60,90,),
  createData('Prashant Patel', 81, 80, 70,80,),
  createData('Himanshu Agnihotri', 82, 80, 80,90,),
  createData('Atharv chauhan', 81, 88, 92,91,),
];


function stu(contacts) {
  return <Evalute
    key={contacts.enrollment}
    name={contacts.name}
    enrollment={contacts.enrollment}
    email={contacts.email}
    attendence={contacts.attendence}
    id={contacts.id}
  />
}

function Evalution() {
return (
  <div className="Cointainer-Main-Mark">
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>StudentsName</TableCell>
          <TableCell align="center">Assignment-1</TableCell>
          <TableCell align="center">Assignment-2</TableCell>
          <TableCell align="center">Assignment-3</TableCell>
          <TableCell align="center">Assignment-4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Students.map((Student) => (
          <TableRow
            key={Student.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {Student.name}
            </TableCell>
            <TableCell align="center">{Student.Assignment1}/100</TableCell>
            <TableCell align="center">{Student.Assignment2}/100</TableCell>
            <TableCell align="center">{Student.Assignment3}/100</TableCell>
            <TableCell align="center">{Student.Assignment4}/100</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
);
        }

export default Evalution;