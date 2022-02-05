import { connect } from 'react-redux';
import AddPointsInputs from './AddPointsInputs';
import * as PointsActions from '../../../../store/actions/pointsActions'

const mapDispatchToProps = {
  addSinglePoints: PointsActions.addSinglePointsAction
};

export default connect(null, mapDispatchToProps)(AddPointsInputs);