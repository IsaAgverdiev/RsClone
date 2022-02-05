import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings2 from '@mui/icons-material/Settings';
import * as UserActions from '../../store/actions/userActions';

interface SettingsProps {
  name: string;
  lastName: string;
}

const theme = createTheme();

const Settings: React.FC<SettingsProps> = ({ name, lastName, }) => {
  const [firstNameValue, setFirstNameValue] = useState(name);
  const [lastNameValue, setLastNameValue] = useState(lastName);


  const handleFirstNameChange = (event: React.BaseSyntheticEvent) => {
    const newValue = event.target.value;
    setFirstNameValue(newValue);
  };

  const handleLastNameChange = (event: React.BaseSyntheticEvent) => {
    const newValue = event.target.value;
    setLastNameValue(newValue);
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
          <ListItemIcon>
            <Settings2 fontSize="medium" />
          </ListItemIcon>
          <Typography component='h1' variant='h5'>
            Settings
          </Typography>
          <Box component='form' noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  value={firstNameValue}
                  onChange={handleFirstNameChange}
                  id='firstName'
                  label='First Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  value={lastNameValue}
                  onChange={handleLastNameChange}
                  autoComplete='family-name'
                />
              </Grid>
            </Grid>
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Settings;
