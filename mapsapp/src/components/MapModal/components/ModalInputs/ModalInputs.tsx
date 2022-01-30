import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface ModalInputsProps {
  lat: number;
  lng: number
}

const ModalInputs = ({lat, lng}: ModalInputsProps) => {

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
          value={lng}
        /> 
        <TextField 
          required 
          id="outlined-latitude"
          label="Latitude"
          value={lat}
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