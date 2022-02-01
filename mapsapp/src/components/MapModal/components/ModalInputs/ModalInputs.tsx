import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface ModalInputsProps {
  lat: number;
  lng: number
}

const ModalInputs = ({lat, lng}: ModalInputsProps) => {
  console.log('%cModalInputs.tsx line:13 lat, lng', 'color: #007acc;', lat, lng);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-longitude"
          label="Longitude"
          value={lng.toFixed(4)}
        /> 
        <TextField 
          required 
          id="outlined-latitude"
          label="Latitude"
          value={lat.toFixed(4)}
        />
        <TextField
        required 
          id="outlined-type"
          label="Type"
          type="text"
          autoComplete="Single"
        />
      </div>
    </Box>
  );
}

export default ModalInputs