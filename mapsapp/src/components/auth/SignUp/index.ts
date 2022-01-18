import { connect } from 'react-redux';
import SignUp from './SignUp';
import * as UserActions from '../../../store/actions/userActions';

const mapDispatchToProps = {
  login: UserActions.loginAction,
};

export default connect(null, mapDispatchToProps)(SignUp);
