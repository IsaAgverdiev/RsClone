import { connect } from 'react-redux';
import SignIn from './SignIn';
import * as UserActions from '../../../store/actions/userActions';
import * as PointsActions from '../../../store/actions/pointsActions';

const mapDispatchToProps = {
  login: UserActions.loginAction,
  addSinglePoints: PointsActions.addSinglePointsAction
};

export default connect(null, mapDispatchToProps)(SignIn);
