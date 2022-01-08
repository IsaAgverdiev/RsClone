import { connect } from 'react-redux';
import Navbar from './Navbar';
import * as UserSelectors from '../../store/selectors/userSelectors'
import { AppState } from '../../store/store';

const mapStateToProps = (state: AppState) => ({
    authorized: UserSelectors.isAuthSelector(state),
})

export default connect(mapStateToProps)(Navbar);
