import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import "./style.css"

const Roles = [
  {
    value: 'Student',
    label: 'Students',
  },
  {
    value: 'Teacher',
    label: 'Teacher',
  },
  {
    value: 'Admin',
    label: 'Admin',
  },
];
const Branches = [
  {
    value: 'Computer science and Engeenering',
    label: 'Computer science and Engeenering',
  },
  {
    value: 'Artificial intelligence and data science',
    label: 'Artificial intelligence and data science',
  },
  {
    value: 'Electronics and communication',
    label: 'Electronics and communication',
  },
  {
    value: 'Mechanical Engeenering',
    label: 'Mechanical Engeenering',
  },
  {
    value: 'Civil Engeenering',
    label: 'Civil Engeenering',
  },
  {
    value: 'Internet of things',
    label: 'Internet of things',
  },
  {
    value: 'Electrical Engeenering',
    label: 'Electrical Engeenering',
  },
  {
    value: 'Electrical instrumentation',
    label: 'Electrical instrumentation',
  },
  {
    value: 'CSEITCS',
    label: 'CSEITCS',
  },
];





const theme = createTheme();

export default function SignUp() {
  const [Role, setRole] = React.useState('Student');

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const [Branch, setBranch] = React.useState('Student');

  const WhileChange = (event) => {
    setBranch(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid>
                <div class="SelectBranch">
                  <TextField
                    id="outlined-select-currency"
                    label="Branch"
                    select
                    value={Branch}
                    onChange={WhileChange}
                  // helperText="Please select your Role"
                  >
                    {Branches.map((select) => (
                      <MenuItem key={select.value} value={select.value}>
                        {select.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </Grid>
              <Grid>
                <div class="SelectRole">
                  <TextField
                    id="outlined-select-currency"
                    label="Role"
                    select
                    value={Role}
                    onChange={handleChange}
                  // helperText="Please select your Role"
                  >
                    {Roles.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </Grid>
              <Grid>
                <div class="Scolar">
              <TextField id="outlined-basic" label="Scolar no" variant="outlined" />
              </div>
              </Grid>
              
              <Grid>
                <div class="Enrollment">
              <TextField id="outlined-basic" label="Enrollment no" variant="outlined" />
              </div>
              </Grid>
              
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}