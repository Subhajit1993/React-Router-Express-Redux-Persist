import {combineReducers} from 'redux';
import permission from './permissionsReduces'
const mainReducer  = combineReducers({
    permission
});

export default mainReducer;