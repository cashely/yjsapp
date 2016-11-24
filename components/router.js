//路由配置
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import * as WeChat from 'react-native-wechat';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer';

import Index from './index/index';
import Menu from './common/drawer';

import Loading from './common/loading';



import {connect} from 'react-redux';
import {ajaxMethod} from '../actions/ajax';

import Launch from './common/launch';


class Router extends Component {
  constructor(props){
    super(props);
    this.state={
      infinite:true,
      pageNo:1
    }

  }
  componentDidMount(){
    WeChat.registerApp('wx1197c17e466681b6');
  }
  _hideModal(){
    this.setState({
      init:false
    })
  }


  _toggleDrawer(){
    this._drawer.open();
  }
  _colseDrawer(){
    this._drawer.close();
  }

  _navigate(route){
    if(route){
      this._navigator.push(route);
    }else{
      this._navigator.pop();
    }
    this._colseDrawer();
  }
  render(){
    //设置默认进入显示的导航组件
    let defaultRoute = {
      name:'launch',
      component:Launch,
      toggleDrawer:this._toggleDrawer.bind(this)
    }
    //控制导航条
    let $navBar = <Navigator.NavigationBar
         routeMapper={{
           LeftButton: (route, navigator, index, navState) =>
            {
              if(route.leftButton){
                return route.leftButton(route, navigator, index, navState);
              } else{
                return null;
              }
            },
           RightButton: (route, navigator, index, navState) =>
             {
                if(route.rightButton){
                  return route.rightButton(route, navigator, index, navState);
                }else{
                  return null
                }
             },
           Title: (route, navigator, index, navState) =>
             {
                if(typeof route.title == 'string'){
                  return (<View style={styles.title}><Text style={styles.titleText} numberOfLines={1}>{route.title}</Text></View>);
                }else if(typeof route.title == 'function'){
                  return route.title();
                }else{
                  return (<View style={styles.title}><Text style={styles.titleText}>广东省药品交易中心</Text></View>)
                }
             }
         }}
         style={styles.titleBar}
       />;
     return (
        <Drawer
            type="overlay"
            content={<Menu navigate={this._navigate.bind(this)}/>}
            panCloseMask={0.2}
            openDrawerOffset={0.5}
            tapToClose={true}
            closedDrawerOffset={-3}
            ref={(ref)=> this._drawer = ref}
            tweenHandler={(ratio) => ({
              main: { opacity:(2-ratio)/2}
            })}
            styles={
              {
                drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
                main: {paddingLeft: 3}
              }
              }
            >
              <Navigator
                ref={(ref)=>this._navigator = ref}
                debugOverlay={false}
                initialRoute = {defaultRoute}
                configureScene ={
                  (route, routeStack)=>{
                     return Navigator.SceneConfigs.PushFromRight
                  }
                }
                renderScene = {
                  (route,navigator)=>{
                    return <route.component {...route} navigator = {navigator} />
                  }
                }
                style={{flex:1,backgroundColor:'#fff'}}
              />
            </Drawer>
      );
  }
}

const styles = StyleSheet.create({
  drawer:{
    backgroundColor:'blue'
  },
  titleBar:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#4078c0',
    justifyContent:'center'
  },
  title:{
    flex:1,
    justifyContent:'center',
    flexWrap:'nowrap'
  },
  titleText:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16,
    color:'#fff'
  },
  buttonMenu:{
    padding:5,
    marginLeft:5,
    marginRight:5,
    justifyContent:'center',
    flex:1
  }
})
function select(state){
  return {
    index:state.index,
    search:state.search
  }
}
export default connect(select)(Router);
