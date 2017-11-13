import {combineReducers} from 'redux';
import SnackBarReducer from './SnackBarReducer';

const allReducers = combineReducers({
    SnackBarReducer: SnackBarReducer,
});

export default allReducers; 
