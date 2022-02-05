import React from "react";
import AddPointInputs from './components/AddPointsInputs';

interface AddPointsElProps {
  markerLat: number;
  markerLng: number;
}

const AddPointsEl = ({ markerLat, markerLng }: AddPointsElProps) => {

  return (
    <AddPointInputs lat={markerLat} lng={markerLng} />
  );

}

export default AddPointsEl;