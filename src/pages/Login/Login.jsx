import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { toggleCreateClassDialog } from '../../store/actions/localStateActions';
import { connect } from 'react-redux';
import { singin } from '../../store/actions/authActions';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Homepage from '../Home/Homepage';

const theme = createTheme();

const Login = (props) => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    props.login({ ...values })
  }

  console.log(props.auth)

  if (props.auth.isLoaded) {
    return (
      <Homepage />
    )
  }else {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img id='logo'
              src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/institutes/logo/170x170/452.jpg?v=1564576092"
              alt="SATI"
              style={{ 'maxHeight': '50px', 'borderRadius': '30px' }}
            />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange}
                autoComplete="email"
                autoFocus
              />
              <TextField

                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: ({ email, password }) => dispatch(singin(email, password)),
    toggleCreateClassDialog: () => dispatch(toggleCreateClassDialog()),
    // toggleJoinClassDialog: () => dispatch(toggleJoinClassDialog())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)