import { connect } from 'react-redux';
import SignIn from './SignIn';
import * as UserActions from '../../../store/actions/userActions';
import * as PointsActions from '../../../store/actions/pointsActions';
import * as UserSelectors from '../../../store/selectors/userSelectors';
import { AppState } from './../../../store/store';

const mapStateToProps = (state: AppState) => ({
  loginError: UserSelectors.loginErrorSelector(state),
});

const mapDispatchToProps = {
  login: UserActions.loginAction,
  addSinglePoints: PointsActions.addSinglePointsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
