import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import * as PointsActions from '../../../../store/actions/pointsActions';

interface AddPointInputsProps {
  lat: number;
  lng: number;
  addPoint: typeof PointsActions.addSinglePointsAction;
}


const pointsTypes = [
  "single",
  "multiple"
];

const AddPointInputs: React.FC<AddPointInputsProps>  = ({ lat, lng, addPoint }) => {
  const [pointType, setPointType] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPointType(event.target.value);
  };

  const handleClick = () => {
    console.log("superclick");
    addPoint({points: "aewe"})
  }


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
          id="outlined-select-type"
          select
          label="Type"
          value={pointType}
          onChange={handleChange}
          helperText="Please select point type"
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
        <Button variant="contained" onClick={handleClick}>
          Add Point
        </Button>
      </div>
    </Box>
  );
}

export default AddPointInputs;
