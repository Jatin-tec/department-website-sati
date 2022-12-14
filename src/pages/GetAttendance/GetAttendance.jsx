import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import Avatar from '@mui/material/Avatar';
import Button from "@material-ui/core/Button";



const testing = (text, colour, handleChange) => {
    return (
        <div className="attendence-status">
            <Button onClick={handleChange} variant="contained" color={colour}>
                {text}
            </Button>
        </div>
    )
}

export default function Getattendance() {

    const [text, setText] = useState("Mark Present")
    const [colour, changeColour] = useState("primary");
    const [isPresent, toggelPresent] = useState(false);

    useEffect(() => {
        if (isPresent) {
            setText("Mark Absent");
            changeColour("secondary");
        } else {
            setText("Mark Present");
            changeColour("primary");
        }
    }, [isPresent])

    const handleChange = (event) => {
        toggelPresent(!isPresent);
    };

    const columns = ["Name", "Enrollment No.", "21/02/2022", "22/02/2022", "23/02/2022", "24/02/2022", "25/02/2022"];

    const data = [
        ["Joe James", "0108AI201017", testing(text, colour, handleChange), "A", 'P', 'A', 'P'],
        ["dsf", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Jsdfames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joefd James", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["sdf fdfd", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Jfdoe James", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Jfdfde Jdffsfdames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joedfsd dfJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joef James", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joedf James", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joed James", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joefdsd James", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joeerter James", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["JoegxJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe recxcJasdames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe Jdsames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe fgsdJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe fdsgJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe dfJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe James", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe fgdsgfsdfgJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe James", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Jofddge James", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joeg sdgfJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe fgsdJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe Jsdfgames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe dsgsfsdfggJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe fJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe fsJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe fJsdfgames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe fdfgJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],
        ["Joe gsdsdfgJames", "0108AI201017", "P", "A", 'P', 'A', 'P'],

    ];

    const options = {
        selectableRows: 'none',
        responsive: 'simple',
        fixedHeader: false,

    };
    return (
        <MUIDataTable
            title={"Student Attendance List"}
            data={data}
            columns={columns}
            options={options}
        />
    )

}