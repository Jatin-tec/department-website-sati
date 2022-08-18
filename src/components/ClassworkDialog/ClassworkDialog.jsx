import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import LinkIcon from '@mui/icons-material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, TextField } from "@material-ui/core";
import "./Style.css"
import YouTubeIcon from '@mui/icons-material/YouTube';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function ClassworkDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <MenuItem onClick={handleClickOpen} disableRipple>
        {props.typeIcon}
        {props.type}
      </MenuItem>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar color='action' sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            {props.typeIcon}
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {props.type}
            </Typography>
            <Button color="primary" variant="contained" component="label">
              Assign
            </Button>
          </Toolbar>
        </AppBar>


        <div className='AssignmentHeading'>
          <h2 className="Assignment-color">{props.type} Details</h2>
        </div>
        <div className="Assignment--Main">
          <div className="">
            <div className="">


              <div className="Announcement-Section">
                <TextField
                  id="TextFeild"
                  multiline
                  label="Title"
                  variant="filled"
                // value
                // onChange={(e) => setInput(e.target.value)}
                />
                <TextField
                  id="filled-multiline-flexible"
                  multiline
                  label="Instructions (optional)"
                  variant="filled"
                // value
                // onChange={(e) => setInput(e.target.value)}
                />


                <div className="">

                  <div className="">


                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
        <div className='AssignmentHeading'>
          <h2 className="Assignment-color">Attach</h2>
        </div>
        <div className="Assignment-Main">

          <span className="Assignment-Buttons">
            <span className='button-1'>
              <Button color="action" variant="contained" component="label">
                <LinkIcon color="primary" sx={{ fontSize: 50 }} />
              </Button>
            </span>
            <span className='button-1'>
              <Button color="action" variant="contained" component="label">
                <FileUploadIcon color="primary" sx={{ fontSize: 50 }} />
                <input hidden accept="image/*" multiple type="file" />
              </Button>

            </span>
            <span className='button-1'>
              <Button color="action" variant="contained" component="label">
                <YouTubeIcon color="primary" sx={{ fontSize: 60 }} />
              </Button></span>

          </span></div>
      </Dialog>
    </div>
  );
}
