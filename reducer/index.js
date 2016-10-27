import {combineReducers} from 'redux';
function index(state=1,action){
	return state;
}


function search(state={datas:[],pageNo:1},action){
		switch(action.type){
			case 'SEARCH' : return Object.assign({},state,{datas:action.datas,pageNo:1});
			case 'LOADSEARCH' : return Object.assign({},state,{datas:state.datas.concat(action.datas),pageNo:state.pageNo+1});
			default : return state;
		}
}

var reducer = combineReducers({
	search,
	index
})

export default reducer;
