import React from "react";
import { useStyles } from "./style";

import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Add, Apps } from "@material-ui/icons";
import { deepOrange } from '@mui/material/colors';
import JoinClass from "../JoinClass/JoinClass";
import CreateClass from "../CreateClass/CreateClass";
import { connect } from "react-redux";
import { toggleCreateClassDialog, toggleJoinClassDialog } from "../../store/actions/localStateActions";

const Header = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleCreate = () => {
    handleClose();
    props.toggleCreateClassDialog()
  };

  const handleJoin = () => {
    handleClose();
    props.toggleJoinClassDialog()
  };

  const firstName = props.auth.auth && props.auth.auth.profile.facultyName

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            {props.children}
            <img
              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/institutes/logo/170x170/452.jpg?v=1564576092"
              alt="SATI"
              style={{ 'max-height': '50px', 'border-radius': '30px' }}
            />

            <Typography variant="h6" className={classes.title} style={{ 'marginLeft': '15px' }}>
              Samrat Ashok Technological Institute
            </Typography>

          </div>
          <div className={classes.header__wrapper__right}>
            <Add onClick={handleClick} className={classes.icon} />
            <Apps className={classes.icon} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleJoin}>Join Class</MenuItem>
              <MenuItem onClick={handleCreate}>Create Class</MenuItem>
            </Menu>

            <div>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>{firstName && firstName[0].toUpperCase()}</Avatar>
            </div>

          </div>
        </Toolbar>
      </AppBar>
      <CreateClass />
      <JoinClass />
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
    toggleJoinClassDialog: () => dispatch(toggleJoinClassDialog())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

