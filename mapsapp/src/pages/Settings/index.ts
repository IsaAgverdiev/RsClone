import { connect } from 'react-redux';
import Settings from './Settings';
import * as UserSelectors from '../../store/selectors/userSelectors';
import { AppState } from './../../store/store';

const mapStateToProps = (state: AppState) => ({
  authorized: UserSelectors.isAuthSelector(state),
  name: UserSelectors.nameSelector(state),
  lastName: UserSelectors.lastNameSelector(state)
});

export default connect(mapStateToProps)(Settings);

