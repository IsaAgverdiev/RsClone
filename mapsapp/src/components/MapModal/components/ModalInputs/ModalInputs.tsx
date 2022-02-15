import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

interface ModalInputsProps {
  lat: number;
  lng: number
}

const pointsTypes = [
  "single",
  "multiple"
];

const ModalInputs = ({ lat, lng }: ModalInputsProps) => {
  const [pointType, setPointType] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPointType(event.target.value);
  };


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
          id="outlined-select-type"
          select
          label="Type"
          type="text"
          value={pointType}
          autoComplete="Single"
          helperText="Please select point type"
          onChange={handleChange}
        >
          {pointsTypes.map((pointType: string) => (
            <MenuItem key={pointType} value={pointType}>
              {pointType}
            </MenuItem>
          ))}
        </TextField>

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
          id="outlined-description"
          label="Description"
          type="text"

        />
        <Button variant="contained">
          Add Point
        </Button>
      </div>
    </Box >
  );
}

export default ModalInputs