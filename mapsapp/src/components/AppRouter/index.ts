import { connect } from 'react-redux';
import AppRouter from './AppRouter';
import * as UserSelectors from '../../store/selectors/userSelectors'
import { AppState } from '../../store/store';

const mapStateToProps = (state: AppState) => ({
    authorized: UserSelectors.isAuthSelector(state),
    name: UserSelectors.nameSelector(state)
})

export default connect(mapStateToProps)(AppRouter);
