import { connect } from 'react-redux';
import ModalInputs from './ModalInputs';
import * as PointsActions from '../../../../store/actions/pointsActions'

const inputsDispatchToProps = {
  addSinglePoints: PointsActions.addSinglePointsAction
};



export default connect(null, inputsDispatchToProps)(ModalInputs);