import React, { useState } from "react";
import "./style.css";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent
} from "@material-ui/core";
import Form from "./Form";
import { connect } from "react-redux";
import { toggleCreateClassDialog } from "../../store/actions/localStateActions";
import { createClass } from "../../store/actions/classActions";

const CreateClass = (props) => {

  const [check, setChecked] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Dialog
        onClose={props.toggleCreateClassDialog}
        aria-labelledby="customized-dialog-title"
        open={props.local.createClassDialog}
        maxWidth={showForm ? "lg" : "xs"}
        className="form__dialog"
      >
        {showForm ? (
          <Form />
        ) : (
          <>
            <div className="class__title">
              Using Classroom at a school with students?
            </div>
            <DialogContent className="class__content">
              <p className="class__text">
                <p>If so, your school must sign up for a free</p>
                <a href="/help" className="class__link">
                  G Suite for Education
                </a>
                account before you can use Classroom
                <a href="/learn" className="class__link2">
                  Learn More.
                </a>
              </p>
              <p>
                G Suite for Education lets schools decide which Google services
                their students can use, and provides additional
                <a href="/privacy" className="class__link2 class__link">
                  privacy and security
                </a>
                protections that are important in a school setting. Students
                cannot use Google Classroom at a school with personal accounts.
              </p>

              <div className="class__checkboxWrapper">
                <Checkbox color="primary" onChange={() => setChecked(!check)} />
                <p>
                  I've read and understand the above notice, and I'm not using
                  Classroom at a school with students
                </p>
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => { }}>
                Close
              </Button>

              <Button
                autoFocus
                color="primary"
                disabled={!check}
                onClick={() => setShowForm(true)}
              >
                Continue
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth,
    local: state.local
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCreateClassDialog: () => dispatch(toggleCreateClassDialog()),
    createClass: (classAbout) => dispatch(createClass(classAbout))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateClass)

