import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ModalInputs = () => {
  const [lng, setLng] = useState('');
  const [ltd, setLtd] = useState('');
  const handleLngChange = (event: React.ChangeEvent<HTMLInputElement>) => { setLng(event.target.value); };
  const handleLtdChange = (event: React.ChangeEvent<HTMLInputElement>) => { setLtd(event.target.value); };

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
          onChange={handleLngChange}
        /> 
        <TextField 
          required 
          id="outlined-latitude"
          label="Latitude"
          value={ltd}
          onChange={handleLtdChange}
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