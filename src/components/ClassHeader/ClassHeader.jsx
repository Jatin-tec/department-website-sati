import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { Avatar } from '@material-ui/core';
import { deepOrange } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { connect, useSelector } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import { toggleCreateClassDialog, toggleJoinClassDialog } from '../../store/actions/localStateActions';
import CreateClass from '../CreateClass/CreateClass';
import JoinClass from '../JoinClass/JoinClass';
import Fab from '@mui/material/Fab';
import "./style.css"
const settings = [
    {
        title: 'Profile',
        path: '/'
    },
    {
        title: 'Account',
        path: '/'
    },
    {
        title: 'Dashboard',
        path: '/'
    },
    {
        title: 'Logout',
        path: 'logout'
    }
];

const ClassHeader = (props) => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const redirect = (page) => {
        if (page === 'logout') {
            props.logout()
        }
    }

    const handleCreate = () => {
        handleClose();
        props.toggleCreateClassDialog()
    };

    const handleJoin = () => {
        handleClose();
        props.toggleJoinClassDialog()
    };

    const pages = useSelector(state => state.header.titles)
    const firstName = useSelector(state => state.auth.profile.firstName)
    const lastName = useSelector(state => state.auth.profile.lastName)

    return (
        <>
            <AppBar position="sticky" color={'action'} >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                color={'error'}
                                sx={{
                                    display: { xs: 'block', md: 'none', color: 'black'},
                                }}
                            >
                                {pages.map((page, index) => (
                                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                                       <Typography textAlign="center">{page.title}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, index) => (
                                <Link key={index} to={page.path} style={{ textDecoration: 'none' }}>
                                    <Button
                                        key={index}
                                        onClick={() => { handleCloseNavMenu();  }}
                                        sx={{ my: 2, color: 'black', display: 'block' }}
                                    >
                                        {page.title}
                                    </Button>
                                </Link>
                            ))}
                        </Box>

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

                        <div className='AddIcon'>
                            <Fab className='IconCointainer' color="primary" aria-label="add">
                                <AddIcon onClick={handleClick} />
                            </Fab>
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
                        </div>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>{firstName && firstName[0].toUpperCase() + lastName[0].toUpperCase()}</Avatar>
                                </IconButton>
                            </Tooltip>

                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting, index) => (
                                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center" onClick={() => redirect(setting.path)}>{setting.title}</Typography>
                                    </MenuItem>
                                ))}

                            </Menu>

                        </Box>
                    </Toolbar>

                </Container>

            </AppBar>
            <CreateClass />
            <JoinClass />
        </>
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
        logout: () => dispatch(logout()),
        toggleCreateClassDialog: () => dispatch(toggleCreateClassDialog()),
        toggleJoinClassDialog: () => dispatch(toggleJoinClassDialog())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassHeader)
