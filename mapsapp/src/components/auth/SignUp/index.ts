import { connect } from 'react-redux';
import SignUp from './SignUp';
import * as UserActions from '../../../store/actions/userActions';
import * as UserSelectors from '../../../store/selectors/userSelectors';
import { AppState } from './../../../store/store';

const mapStateToProps = (state: AppState) => ({
  signUpError: UserSelectors.signUpErrorSelector(state),
});

const mapDispatchToProps = {
  signUp: UserActions.SignUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
