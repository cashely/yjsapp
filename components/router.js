//路由配置
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer';

import Index from './index/index';
import Menu from './common/drawer';


//router components
import Search from './search/search';
import SearchHeader from './search/searchHeader';


class Router extends Component {

  constructor(props){
    super(props);
    this.state={
      searchData:[]
    }
  }
  componentDidMount(){

  }


  _toggleDrawer(){
    this._drawer.open();
  }
  _colseDrawer(){
    this._drawer.close();
  }

  _searchAction(searchString){
    const data = [{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:true,
      time:'2016-08-01'
    },{
      type:'医用耗材',
      title:'一期医用耗材生产企业报名系统操作培训的通知',
      isNew:true,
      time:'2016-08-02'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-03'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-04'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-05'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-06'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-07'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-08'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-09'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-09'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-09'
    }];
    this.props.dispatch({
      type:'SEARCH',
      datas:data
    });
  }

  _searchHandle(navigator){
    navigator.push({
      component:Search,
      name:'search',
      title:()=> (<SearchHeader searchAction={this._searchAction.bind(this)} navigator={navigator}/>)
    });
  }

  _navigate(route){
    if(route){
      this._navigator.push(route);
    }else{
      this._navigator.pop();
    }
    this._colseDrawer();

  }
  render() {
    //控制导航条
    let $navBar = <Navigator.NavigationBar
         routeMapper={{
           LeftButton: (route, navigator, index, navState) =>
            {
              if(route.leftButton){
                return route.leftButton(route, navigator, index, navState);
              } else{
                return false;
              }
            },
           RightButton: (route, navigator, index, navState) =>
             {
                if(route.rightButton){
                  return route.rightButton(route, navigator, index, navState);
                }else{
                  return false
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
          initialRoute = {{
            name:'defaultRuote',
            component:Index,
            title:'广东省药品交易中心',
            leftButton:
              (route)=>{
                return <TouchableOpacity onPress={this._toggleDrawer.bind(this)} style={styles.buttonMenu}><Icon name="list-ul" size={20} color="#fff"/></TouchableOpacity>
              },
            rightButton:
              (route,navigator)=>{
                return <TouchableOpacity onPress={this._searchHandle.bind(this,navigator)} style={styles.buttonMenu}><Icon name="search" size={20} color="#fff"/></TouchableOpacity>
              }
          }}

          navigationBar={
             $navBar
          }

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
    backgroundColor:'#4078c0',
    justifyContent:'center'
  },
  title:{
    flex:1,
    overflow:'hidden',
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
    index:state.index
  }
}
export default connect(select)(Router);
