import { connect } from 'react-redux';
import SignIn from './SignIn';
import * as UserActions from '../../../store/actions/userActions';

const mapDispatchToProps = {
  login: UserActions.loginAction,
};

export default connect(null, mapDispatchToProps)(SignIn);
