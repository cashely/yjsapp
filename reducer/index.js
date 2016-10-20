import {combineReducers} from 'redux';
function index(state=1,action){
	return state;
}

var reducer = combineReducers({
	index
})

export default reducer;