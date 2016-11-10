import {combineReducers} from 'redux';

let defaultIndex = {
	notice:[],
	news:[],
	policy:[],
	slider:[]
}

function index(state=defaultIndex,action){
	switch(action.type){
		case 'LOAD_INDEX_NOTICE' : return Object.assign({},state,{notice:action.datas});
		case 'LOAD_INDEX_NEWS' : return Object.assign({},state,{news:action.datas});
		case 'LOAD_INDEX_POLICY' : return Object.assign({},state,{policy:action.datas});
		case 'LOAD_INDEX_SLIDER' : return Object.assign({},state,{slider:action.datas});
		default : return state;
	}
}

//搜索
let defaultSearch = {
	datas:[],
	searchString:''
}

function search(state=defaultSearch,action){
		switch(action.type){
			case 'RESET_SEARCH' : return defaultSearch;
			case 'LOAD_SEARCH' : return Object.assign({},state,{datas:state.datas.concat(action.datas)});
			case 'CHANGE_SEARCH_STRING' : return Object.assign({},state,{searchString:action.datas});
			default : return state;
		}
}

let defaultNews = {
	datas:[],
	menus:[]
}

function news(state = defaultNews,action){
	switch (action.type) {
		case 'LOAD_NEWS': return Object.assign({},state,{datas:state.datas.concat(action.datas)});
		case 'LOAD_NEWS_MENU' : return Object.assign({},state,{menus:action.datas});
		case 'RESET_NEWS' : return Object.assign({},state,{datas:[]});
		default :  return state;

	}
}
//通知公告
let defaultNotice = {
	datas:[],
	menus:[]
}

function notice(state = defaultNotice,action){
	switch (action.type) {
		case 'LOAD_NOTICE': return Object.assign({},state,{datas:state.datas.concat(action.datas)});
		case 'LOAD_NOTICE_MENU' : return Object.assign({},state,{menus:action.datas});
		case 'RESET_NOTICE' : return Object.assign({},state,{datas:[]});
		default :  return state;

	}
}
//中标公告
let defaultBid = {
	datas:[],
	menus:[]
}

function bid(state = defaultBid,action){
	switch (action.type) {
		case 'LOAD_BID': return Object.assign({},state,{datas:state.datas.concat(action.datas)});
		case 'LOAD_BID_MENU' : return Object.assign({},state,{menus:action.datas});
		case 'RESET_BID' : return Object.assign({},state,{datas:[]});
		default :  return state;

	}
}
//政策法规
let defaultPolicy = {
	datas:[],
	menus:[]
}

function policy(state = defaultPolicy,action){
	switch (action.type) {
		case 'LOAD_POLICY': return Object.assign({},state,{datas:state.datas.concat(action.datas)});
		case 'LOAD_POLICY_MENU' : return Object.assign({},state,{menus:action.datas});
		case 'RESET_POLICY' : return Object.assign({},state,{datas:[]});
		default :  return state;

	}
}
//非诚信名单
let defaultRoll = {
	datas:[],
	menus:[]
}

function roll(state = defaultRoll,action){
	switch (action.type) {
		case 'LOAD_ROLL': return Object.assign({},state,{datas:state.datas.concat(action.datas)});
		case 'LOAD_ROLL_MENU' : return Object.assign({},state,{menus:action.datas});
		case 'RESET_ROLL' : return Object.assign({},state,{datas:[]});
		default :  return state;

	}
}
//培训通知
let defaultTrain = {
	datas:[],
	menus:[]
}

function train(state = defaultTrain,action){
	switch (action.type) {
		case 'LOAD_TRAIN': return Object.assign({},state,{datas:state.datas.concat(action.datas)});
		case 'LOAD_TRAIN_MENU' : return Object.assign({},state,{menus:action.datas});
		case 'RESET_TRAIN' : return Object.assign({},state,{datas:[]});
		default :  return state;

	}
}

//业务咨询
let defaultService = {
	datas:[],
	menus:[]
}

function service(state = defaultService,action){
	switch (action.type) {
		case 'LOAD_SERVICE': return Object.assign({},state,{datas:state.datas.concat(action.datas)});
		case 'LOAD_SERVICE_MENU' : return Object.assign({},state,{menus:action.datas});
		case 'RESET_SERVICE' : return Object.assign({},state,{datas:[]});
		default :  return state;

	}
}
//我的收藏
let defaultCollect = {
	datas:[]
}

function collect(state = defaultCollect,action){
	switch (action.type) {
		case 'LOAD_COLLECT': return Object.assign({},state,{datas:state.datas.concat(action.datas)});
		case 'RESET_COLLECT' : return Object.assign({},state,{datas:[]});
		default :  return state;

	}
}

var reducer = combineReducers({
	search,
	index,
	news,
	notice,
	bid,
	policy,
	roll,
	train,
	service,
	collect
})

export default reducer;
