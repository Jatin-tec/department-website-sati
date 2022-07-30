import React, { useState } from "react";
import {
  Button,
  DialogActions,
  TextField
} from "@material-ui/core";
import { createClass } from "../../store/actions/classActions";
import { connect } from 'react-redux'
import MenuItem from '@mui/material/MenuItem';

const subjects = [
  {
    value: 'ADA',
    id: 'AI2024',
    label: 'ADA',
  },
  {
    value: 'ML',
    id: 'AI2023',
    label: 'ML',
  },
  {
    value: 'Opereating system',
    id: 'AI2021',
    label: 'Opereating system',
  },
];

const branches = [
  {
    value: 'Computer science and Engeenering',
    id: 'CSE002',
    label: 'Computer science and Engeenering',
  },
  {
    value: 'Artificial intelligence and data science',
    id: 'AI001',
    label: 'Artificial intelligence and data science',
  },
  {
    value: 'Electronics and communication',
    id: 'EC004',
    label: 'Electronics and communication',
  },
  {
    value: 'Mechanical Engeenering',
    id: 'ME005',
    label: 'Mechanical Engeenering',
  },
  {
    value: 'Civil Engeenering',
    id: 'CE003',
    label: 'Civil Engeenering',
  },
  {
    value: 'Internet of Things',
    id: 'IOT006',
    label: 'Internet of Things',
  },
  {
    value: 'Electrical Engeenering',
    id: 'EE007',
    label: 'Electrical Engeenering',
  },
  {
    value: 'Electrical Instrumentation',
    id: 'EI008',
    label: 'Electrical Instrumentation',
  },
  {
    value: 'CSEITCS',
    id: 'CSEITCSSE009',
    label: 'CSEITCS',
  },
];

const Form = (props) => {

  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");
  const [subject, setSubject] = useState(subjects[0].value);
  const [branch, setBranch] = React.useState(branches[0].value);

  const addClass = (e) => {
    e.preventDefault();
    props.createClass({
      className, 
      section, 
      subjectCode: subject, 
      branch
    })
  };

  return (
    <div className="form">
      <p className="class__title">Create Class</p>

      <div className="form__inputs">
        <TextField
          id="filled-basic"
          label="Class Name (required)"
          className="form__input"
          variant="filled"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <TextField
          id="filled-select-currency"
          label="Section"
          className="form__input"
          variant="filled"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
        <div className="form__input">
          <TextField
            id="subject-select"
            className="form__input"
            select
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            variant="filled"
          >
            {subjects.map(option => (
              <MenuItem key={option.value} value={option.id}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="form__input">
          <TextField
            id="branch-select"
            className="form__input"
            select
            label="Branch"
            value={branch}
            onChange={(e)=> setBranch(e.target.value)}
            variant="filled"
          >
            {branches.map(option => (
              <MenuItem key={option.value} value={option.id}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

      </div>
      <DialogActions>
        <Button onClick={addClass} color="primary">
          Create
        </Button>
      </DialogActions>
    </div>
  );
};


const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createClass: (classAbout) => dispatch(createClass(classAbout))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

