import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import * as UserSelectors from '../../../../store/selectors/userSelectors';
import { AppState } from './../../../../store/store';

const mapStateToProps = (state: AppState) => ({
  name: UserSelectors.nameSelector(state),
  lastName: UserSelectors.lastNameSelector(state)
});

export default connect(mapStateToProps)(SignedInLinks);
