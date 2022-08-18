import React, { useState } from "react";
import "./style.css";
import {
  Avatar,
  Button,
  Dialog,
  Slide,
  TextField
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { connect } from "react-redux";
import { toggleJoinClassDialog } from "../../store/actions/localStateActions";
import { joinClass } from "../../store/actions/classActions";
import { logout } from "../../store/actions/authActions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const JoinClass = (props) => {

  const [classCode, setClassCode] = useState("");
  const [email, setemail] = useState("");
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.joinClass(classCode);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={props.local.joinClassDialog}
        onClose={props.toggleJoinClassDialog}
        TransitionComponent={Transition}
      >
        <div className="joinClass">
          <div className="joinClass__wrapper">
            <div
              className="joinClass__wraper2"
              onClick={props.toggleJoinClassDialog}
            >
              <Close className="joinClass__svg" />
              <div className="joinClass__topHead">Join Class</div>  
            </div>
            <Button
              className="joinClass__btn"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Join
            </Button>
          </div>
          <div className="joinClass__form">
            <p className="joinClass__formText">
              You're currently signed in as {props.auth && props.auth.profile.email}
            </p>
            <div className="joinClass__loginInfo">
              <div className="joinClass__classLeft">
                <Avatar src={'loggedInUser?.photoURL'} />
                <div className="joinClass__loginText">
                  <div className="joinClass__loginName">
                  {props.auth && `${props.auth.profile.firstName} ${props.auth.profile.lastName}`}
                  </div>
                  <div className="joinClass__loginEmail">
                  {props.auth && props.auth.profile.email}
                  </div>
                </div>
              </div>
              <Button variant="outlined" color="primary" onClick={props.logout}>
                Logout
              </Button>
            </div>
          </div>
          <div className="joinClass__form">
            <div
              style={{ fontSize: "1.25rem", color: "#3c4043" }}
              className="joinClass__formText"
            >
              Class Code
            </div>
            <div
              style={{ color: "#3c4043", marginTop: "-5px" }}
              className="joinClass__formText"
            >
              Ask your teacher for the class code, then enter it here.
            </div>
            <div className="joinClass__loginInfo">
              <TextField
                id="outlined-basic"
                label="Class Code"
                variant="outlined"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
                error={error}
                helperText={error && "No class was found"}
              />
              <TextField
                id="outlined-basic"
                label="Owner's email"
                variant="outlined"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.auth,
    local: state.local
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    joinClass: (classCode) => dispatch(joinClass(classCode)),
    logout: () => dispatch(logout()),
    toggleJoinClassDialog: () => dispatch(toggleJoinClassDialog())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinClass)
