import React from "react";
import AddPointInputs from './components/AddPointsInputs';
import * as PointsActions from '../../store/actions/pointsActions';

interface AddPointsElProps {
  markerLat: number;
  markerLng: number;
  addPoint:  typeof PointsActions.addSinglePointsAction;
}

const AddPointsEl = ({ markerLat, markerLng, addPoint }: AddPointsElProps) => {

  return (
    <AddPointInputs lat={markerLat} lng={markerLng} addPoint={addPoint} />
  );

}

export default AddPointsEl;