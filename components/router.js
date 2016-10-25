//路由配置
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer';

import Index from './index/index';
import Menu from './common/drawer';


//router components
import Search from './search/search';
import SearchHeader from './search/searchHeader';


export default class Router extends Component {
  componentDidMount(){

  }


  _toggleDrawer(){
    this._drawer.open();
    console.log(this._drawer.getHeight());
  }
  _searchHandle(navigator){
    navigator.push({
      component:Search,
      name:'search',
      title:SearchHeader
    });
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
                  return <route.title/>;
                }else{
                  return (<View style={styles.title}><Text style={styles.titleText}>广东省药品交易中心</Text></View>)
                }
             }
         }}
         style={styles.titleBar}
       />;



    return (
      <Drawer
        type="displace"
        content={<Menu/>}
        panCloseMask={0.2}
        openDrawerOffset={100}
        openDrawerOffset={0.5}
        ref={(ref)=> this._drawer = ref}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
        <Navigator
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
          style={{flex:1}}
        />
        </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  titleBar:{
    flex:1,
    backgroundColor:'#4078c0',
    justifyContent:'center'
  },
  title:{
    flex:1,
    justifyContent:'center',
    flexWrap:'nowrap'
  },
  titleText:{
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
