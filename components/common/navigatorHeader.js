import React,{
  Component,
  Platform
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import NavigatorBar from 'react-native-navbar';

import Search from '../search/search';

export default class NavigatorHeader extends Component {



  constructor(props){
    super(props);
    // console.log(this.props)
  }
  shouldComponentUpdate(){
    return false;
  }
  render(){
    return(
      <NavigatorBar
        leftButton= {
          <LeftButton {...this.props}/>
        }
        title={<Title {...this.props}/>}
        style={{backgroundColor:'#4078c0',flexDirection:'row',alignItems:'center'}}
        rightButton={<SearchButton {...this.props}/>}
      />
    )
  }
}


class LeftButton extends Component {
  render(){
    let LEFTBUTTON;
    if(this.props.isBack){
      LEFTBUTTON = <BackButton {...this.props}/>
    }else if(this.props.isDrawer){
      LEFTBUTTON = <DrawerButton {...this.props}/>
    }else{
      LEFTBUTTON = null
    }
    return(
      <View style={{flex:1}}>
        {LEFTBUTTON}
      </View>
    )
  }
}

class Title extends Component {

  render(){
    if(typeof this.props.title == 'string'){
      return (<View style={styles.title}><Text style={styles.titleText} numberOfLines={1}>{this.props.title}</Text></View>);
    }else if(typeof this.props.title == 'function'){
      return this.props.title();
    }else{
      return (<View style={styles.title}><Text style={styles.titleText}>广东省药品交易中心</Text></View>)
    }
  }
}

class DrawerButton extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <TouchableOpacity onPress={this.props._drawerOpenHandle} style={styles.buttonMenu}><Icon name="user" size={20} color="#fff"/></TouchableOpacity>
    )
  }
}

class SearchButton extends Component {

  _searchHandle(navigator){
    this.props.navigator.push({
      component:Search,
      name:'search',
      loadSearch:this._loadSearch
    });
  }
  render(){
    return(
      this.props.isSearch ? <TouchableOpacity onPress={this._searchHandle.bind(this,navigator)} style={styles.buttonMenu}><Icon name="search" size={20} color="#fff"/></TouchableOpacity> : null
    )
  }
}

class BackButton extends Component {
  _goback(){
    this.props.navigator.pop();
  }
  render(){
    return(
      <TouchableOpacity onPress={this._goback.bind(this)} style={styles.buttonMenu}><Icon name="angle-left" size={30} color="#fff"/></TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  buttonMenu:{
    width:40,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'nowrap'
  },
  titleText:{
    textAlign:'center',
    flex:1,
    lineHeight:30,
    justifyContent:'center',
    fontWeight:'bold',
    fontSize:16,
    color:'#fff'
  },
})
