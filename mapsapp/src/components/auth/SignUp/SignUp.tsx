import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as UserActions from '../../../store/actions/userActions';

interface AccountMenuProps {
  signUp: typeof UserActions.signUpAction;
  signUpError?: string;
}

const theme = createTheme();

const SignUp: React.FC<AccountMenuProps> = ({ signUp, signUpError }) => {
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const navigate = useNavigate();

  const handleFirstNameChange = (event: React.BaseSyntheticEvent) => {
    const newValue = event.target.value;
    setFirstNameValue(newValue);
  };

  const handleLastNameChange = (event: React.BaseSyntheticEvent) => {
    const newValue = event.target.value;
    setLastNameValue(newValue);
  };

  const handleLoginChange = (event: React.BaseSyntheticEvent) => {
    const newValue = event.target.value;
    setEmailValue(newValue);
  };

  const handlePasswordChange = (event: React.BaseSyntheticEvent) => {
    const newValue = event.target.value;
    setPasswordValue(newValue);
  };

  const handleRegister = (email: string, password: string) => {
    signUp(email, password, navigate);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  value={firstNameValue}
                  onChange={handleFirstNameChange}
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id='lastName'
                  label='Last Name'
                  value={lastNameValue}
                  onChange={handleLastNameChange}
                  required
                  fullWidth
                  name='lastName'
                  autoComplete='family-name'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  value={emailValue}
                  onChange={handleLoginChange}
                  fullWidth
                  id='email'
                  label='email'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  value={passwordValue}
                  onChange={handlePasswordChange}
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
              {signUpError && <div>{signUpError}</div>}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value='allowExtraEmails' color='primary' />}
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid>
            </Grid>
            <Button
              type='button'
              onClick={() => handleRegister(emailValue, passwordValue)}
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link to='/sing_in'>
                  <Typography variant='body2' style={{ color: 'black' }}>
                    Sign In
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
