//首页
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid,
  TextInput,
  BackAndroid,
  Alert,
  InteractionManager,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import NavigatorHeader from '../common/navigatorHeader';
import {connect} from 'react-redux';
import JPushModule from 'jpush-react-native';

import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Search from '../search/search';
import Single from '../single/single';
import Home from './index/home';
import Notice from '../notice/notice';
import News from '../news/news';
import Bid from '../bid/bid';
import Policy from '../policy/policy';
import Roll from '../roll/roll';
import Train from '../train/train';

import Intro from '../intro/intro';
import Adv from '../adv/adv';


//actions
import {ajaxMethod} from '../../actions/ajax';

import Loading from '../common/loading';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      advModal:false,
      page:0,
      uri:'http://imgsrc.baidu.com/forum/w%3D580/sign=b5e4897b08f79052ef1f47363cf2d738/c3b4dac451da81cbac9b79a55366d016082431b7.jpg',
      isShowIntro:false,
      is_loading:{
        is_loading_notice:true,
        is_loading_news:true,
        is_loading_policy:true,
        is_loading_silder:true
      }
    };
    this._isShowIntro = this._isShowIntro.bind(this);
  }
  componentWillMount(){

  }
  componentDidMount(){
    JPushModule.initPush();
    // JPushModule.getInfo((map)=>{
    //   console.log(map,'jpush');
    // });
    JPushModule.getRegistrationID((id)=>{
      console.log('getRegistrationID',id);
    });

    JPushModule.addReceiveOpenNotificationListener((map) => {
      console.log("Opening notification!");
      //自定义点击通知后打开某个 Activity，比如跳转到 pushActivity
      console.log(JSON.parse(map['cn.jpush.android.EXTRA']).id);
      let extra = JSON.parse(map['cn.jpush.android.EXTRA']);
      if(extra.id){
        ajaxMethod('wpPosts/getWpPostsKeepList',{
          postIds: JSON.stringify([extra.id])
        }).then((res)=>{
          if(res.datas.length !==0 ) {
            this.props.navigator.push({
              component:Single,
              name:'single',
              id:extra.id,
              goBack:this.props.navigator.pop,
              isShare:true,
              isCollected:true,
              navigator:this.props.navigator,
              title:res.datas[0].postTitle,
              postExcerpt:res.datas[0].postExcerpt
            })
          }
        })
      }
    });

    //此处需要设置从接口返回推广图片以后设置显示或者不显示
    // this.setState({
    //   advModal:true
    // });
    // this._isShowIntro();
    InteractionManager.runAfterInteractions(() => {
      this._loadSlider();
      this._loadNotice();
      this._loadNews();
      this._loadPolicy();
    });
    BackAndroid.addEventListener('hardwareBackPress', ()=> {
       if (this.props.navigator.getCurrentRoutes().length >1 ) {
         this.props.navigator.pop();
         return true;
       }else{
         ToastAndroid.show('再按一次退出应用',ToastAndroid.LONG);
         BackAndroid.addEventListener('hardwareBackPressTwice', this._exitApp);
         setTimeout(()=>{
           BackAndroid.removeEventListener('hardwareBackPressTwice', this._exitApp);
           return true;
         },2000);
         return true;
       }
       return true;
     });
  }
  componentWillMount(){
    JPushModule.removeReceiveCustomMsgListener();
    JPushModule.removeReceiveNotificationListener();
  }
  //退出应用
  _exitApp(){
    BackAndroid.exitApp();
  }
  //读取轮播图片
  _loadSlider = () => {
    ajaxMethod('wpPosts/getWpPostsList',{
      teamId:41
    }).then((res) => {
      this.props.dispatch({
        type:'LOAD_INDEX_SLIDER',
        datas:res.datas
      })
      this.setState({
        is_loading:Object.assign({},this.state.is_loading_silder,{is_loading_silder:false})
      });
    })
  }

  _loadNotice = () => {
    //通知公告
    ajaxMethod('wpPosts/getWpPostsList',{pageSize:5,parentTeamId:13,teamId:''})
      .then((res)=>{
        this.props.dispatch({
          type:'LOAD_INDEX_NOTICE',
          datas:res.datas
        });
        this.setState({
          is_loading:Object.assign({},this.state.is_loading,{is_loading_notice:false})
        });
      })
  }
  _loadNews = () => {
    ajaxMethod('wpPosts/getWpPostsList',{
      pageSize:4,
      parentTeamId:14,
      teamId:''
    }).then((res)=>{
      this.props.dispatch({
        type:'LOAD_INDEX_NEWS',
        datas:res.datas
      })
      this.setState({
        is_loading:Object.assign({},this.state.is_loading,{is_loading_news:false})
      });
    })
  }
  _loadPolicy = () => {
    ajaxMethod('wpPosts/getWpPostsList',{
      pageSize:5,
      parentTeamId:16,
      teamId:''
    }).then((res) => {
      this.props.dispatch({
        type:'LOAD_INDEX_POLICY',
        datas:res.datas
      })
      this.setState({
        is_loading:Object.assign({},this.state.is_loading,{is_loading_policy:false})
      });
    })
  }
  _isShowIntro = async ()=>{
    //异步AsyncStorage需要awit来修改成同步
    let isShowIntro = await AsyncStorage.getItem('isShowIntro');
    console.log(!isShowIntro);
    if(!isShowIntro){
      this.setState({
        isShowIntro:true
      })
    }
  }
  _hideModal(){
    this.setState({
      advModal:false
    })
  }
  _changeTabHandle = (num)=>{
    console.log(num);
    this.setState({
      page:num
    })
  }
  render(){
    return (
      <View style={styles.content}>
        <NavigatorHeader isDrawer={true} isSearch={true} {...this.props} title="广东省药品交易中心"/>
        <ScrollableTabView
          renderTabBar={() => <ScrollableTabBar style={{height:43}} tabStyle={{height:44}} />}
          tabBarActiveTextColor="#4078c0"
          tabBarUnderlineStyle={{backgroundColor:'#4078c0'}}
          page={this.state.page}
        >
          <Home changeTabHandle = {this._changeTabHandle} {...this.props} tabLabel="首页要闻"/>
          <Notice {...this.props} tabLabel="通知公告"/>
          <News {...this.props} tabLabel="新闻资讯"/>
          <Bid {...this.props} tabLabel="中标公告"/>
          <Policy {...this.props} tabLabel="政策法规"/>
          <Roll {...this.props} tabLabel="非诚信名单"/>
          <Train {...this.props} tabLabel="培训通知"/>
        </ScrollableTabView>
        <Adv isVisible={this.state.advModal} hideModal={this._hideModal.bind(this)} uri={this.state.uri}/>
        {
          this.state.isShowIntro ? <Intro/> : null
        }
        <Loading isVisible={this.state.is_loading.is_loading_notice || this.state.is_loading.is_loading_news || this.state.is_loading.is_loading_policy || this.state.is_loading.is_loading_silder}/>
      </View>
    )
  }
}
class Index extends Component {
  constructor(props) {
    super(props);
    // console.dir(this.props);
  }


  render() {
    return (
        <Main {...this.props}/>
    );
  }
}

const styles = StyleSheet.create({
  content:{
    // paddingTop:64,
    backgroundColor:'#fff',
    flex:1
  },
  navBar:{
    backgroundColor:'#E8E8E8',
    height:36
  },
  navTitle:{
    padding:10
  },
  navActive:{
    color:'#4078c0',
    padding:10,
    fontWeight:'bold'
  },
  searchBar:{
    flex:1,
    padding:5,
    justifyContent:'center',
    height:40,
    flexDirection:'row',
  },
  searchInput:{
    flex:1,
    borderRadius:3,
    backgroundColor:'#e8e8e8'
  },
  searchButton:{
    width:40,
    justifyContent:'center'
  },
  main:{
    flex:1,
    overflow:'hidden'
  },
  image:{
    flex:1
  },
  imagesBar:{

  },
  mainScroll:{
    flex:1
  },
  buttonMenu:{
    padding:5,
    marginLeft:5,
    marginRight:5,
    justifyContent:'center',
    flex:1
  }
});

function select(state){
  return{
    index:state.index
  }
}
export default connect(select)(Index);
