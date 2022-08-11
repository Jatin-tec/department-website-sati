import { useState } from 'react';
import React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import LocalPostOfficeRoundedIcon from '@mui/icons-material/LocalPostOfficeRounded';
import "./style.css"
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const ClassWork = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [topic, setTopic] = useState('');

  const handleChange = (event) => {
    setTopic(event.target.value);
  };

  return (
    <Grid container>
      <Grid container xs={3.5}>
        <Box sx={{ pt: 15, pl: 15, display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
          <Stack spacing={2} direction="column">
            <Button variant="text">All Topics</Button>
            <Button variant="text">1</Button>
            <Button variant="text">2</Button>
          </Stack>

        </Box>
      </Grid>
      <Grid container xs={6}>
        <Grid item xs={12}>
          <Box sx={{ pt: 5 }}>
            <Stack spacing={2} direction="column">
              <div>
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Create
                </Button>
                <Box sx={{ minWidth: 120, pt: 2, display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Topics</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={topic}
                      label="Topics"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>All Topics</MenuItem>
                      <MenuItem value={10}>Chapter 1</MenuItem>
                      <MenuItem value={20}>Chapter 2</MenuItem>
                      <MenuItem value={30}>chapter 3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <AssignmentRoundedIcon />
                    Assignment
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <AssignmentRoundedIcon />
                    Quiz Assignment
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <LiveHelpRoundedIcon />
                    Question
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <LibraryBooksRoundedIcon />
                    Material
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <LocalPostOfficeRoundedIcon />
                    Reuse-Post
                  </MenuItem>
                </StyledMenu>
              </div>
              <Divider sx={{ my: 0.5 }} />

              <table className="TeacherTable">

                {/* This tbody is component */}
                <tbody>
                  <tr className="Teacher-tr">
                    <td>
                      <div className="Assignment-tr-div">
                        <span className="Assignment-Avatar"><AssignmentOutlinedIcon /></span>
                        <span className="Assignment-Name">Assingment 1</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                {/* This tbody is component */}

                <tbody>
                  <tr className="Teacher-tr">
                    <td>
                      <div className="Assignment-tr-div">
                        <span className="Assignment-Avatar"><AssignmentOutlinedIcon /></span>
                        <span className="Assignment-Name">Assingment 2</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="Teacher-tr">
                    <td>
                      <div className="Assignment-tr-div">
                        <span className="Assignment-Avatar"><AssignmentOutlinedIcon /></span>
                        <span className="Assignment-Name">Assingment 3</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="Teacher-tr">
                    <td>
                      <div className="Assignment-tr-div">
                        <span className="Assignment-Avatar"><AssignmentOutlinedIcon /></span>
                        <span className="Assignment-Name">Assingment 4</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Grid>

  );
}
export default ClassWork;
