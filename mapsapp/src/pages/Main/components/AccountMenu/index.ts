import { connect } from 'react-redux';
import AccountMenu from "./AccountMenu";
import * as UserActions from '../../../../store/actions/userActions';

const mapDispatchToProps = {
    logout: UserActions.logoutAction
}

export default connect(null, mapDispatchToProps)(AccountMenu);