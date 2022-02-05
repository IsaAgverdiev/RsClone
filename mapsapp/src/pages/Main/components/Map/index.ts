import { connect } from 'react-redux';
import Map from './Map';
import * as PointsActions from '../../../../store/actions/pointsActions';

const mapDispatchToProps = {
  addSinglePoints: PointsActions.addSinglePointsAction
};

export default connect(null, mapDispatchToProps)(Map);



