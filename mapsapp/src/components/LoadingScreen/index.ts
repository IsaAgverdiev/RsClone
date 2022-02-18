// export { default } from './LoadingScreen'
import { connect } from 'react-redux';

import * as UserSelectors from '../../store/selectors/userSelectors';
import { AppState } from './../../store/store';
import LoadingScreen from './LoadingScreen';

const mapStateToProps = (state: AppState) => ({
  isLoading: UserSelectors.isLoadingSelector(state),
});

export default connect(mapStateToProps)(LoadingScreen);