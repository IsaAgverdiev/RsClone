import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as UserActions from '../../../store/actions/userActions';
import * as PointsActions from '../../../store/actions/pointsActions';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { showPoints } from '../../../firebase';

interface AccountMenuProps {
  login: typeof UserActions.loginAction;
  loginError?: string;
  addSinglePoints: typeof PointsActions.addSinglePointsAction;
}

const theme = createTheme();

const SignIn: React.FC<AccountMenuProps> = ({ login, loginError }) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event: React.BaseSyntheticEvent) => {
    const newValue = event.target.value;
    setEmailValue(newValue);
  };

  const handlePasswordChange = (event: React.BaseSyntheticEvent) => {
    const newValue = event.target.value;
    setPasswordValue(newValue);
  };

  const handleLogin = (email: string, password: string) => {
    login(email, password, navigate);
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
            Sign in
          </Typography>
          <Box component='form' noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              value={emailValue}
              onChange={handleEmailChange}
              id='email'
              label='email'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              value={passwordValue}
              onChange={handlePasswordChange}
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            {loginError && <div>{loginError}</div>}
            <Button
              type='button'
              onClick={() => handleLogin(emailValue, passwordValue)}
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/forgot'>
                  <Typography variant='body2' style={{ color: 'black' }}>
                    Forgot password?
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to='/sign_up'>
                  <Typography variant='body2' style={{ color: 'black' }}>
                    Sign Up
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

export default SignIn;
