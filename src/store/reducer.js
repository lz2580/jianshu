import { combineReducers } from "redux";
import {reducer as headerReducer} from '../common/heard/store';
import { reducer as homeReducer } from '../pages/home/store/'

const reducer = combineReducers({
	header : headerReducer,
	home: homeReducer
});
export default reducer