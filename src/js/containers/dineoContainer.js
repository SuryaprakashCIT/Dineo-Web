import {connect} from 'react-redux';
import Dineo from '../components/Dineo';
import {contactUs} from '../actions';

function mapStateToProps(state) {
    return {
        snackBarMessage: state.SnackBarReducer.message,
        isSnackbarOpen: state.SnackBarReducer.isSnackbarOpen,
    };
}
function mapDispatchToProps (dispatch) {
    return{
        contactUs: (userDetails) => {
            dispatch(contactUs(userDetails));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dineo);
