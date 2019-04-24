import { combineReducers } from "redux";
import {reducer as headerReducer} from '../common/heard/store'; // as 别名

const reducer = combineReducers({
	header : headerReducer
});
export default reducer