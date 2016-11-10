import React,{Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {elementScale,elementHeight} from './functions';
import NavigatorTitle from './navigatorTitle';
import {httpAddress} from '../../config/index';

import Icon from 'react-native-vector-icons/FontAwesome';
import Collect from '../collect/collect';
import Page from '../page/page';
import Service from '../service/service';
import FeedBack from '../feedBack/feedBack';
export default class Drawer extends Component {
  constructor(props){
    super(props)
  }

  render(){
      return(
          <View style={styles.content}>
            <Logo {...this.props}/>
            <Menu {...this.props}/>
          </View>
      )
  }
}

class Logo extends Component {
  render(){
    return(
      <View style={styles.logoContent}>
        <Image style={styles.logoImage} source={require('../../static/images/logo.png')}/>
        <Text style={styles.logoText}>广东省药品交易中心</Text>
      </View>
    )
  }
}

class Menu extends Component {
  _goBack(){
    this.props.navigate();
  }
  _collectHandle(){
    this.props.navigate({
      component:Collect,
      name:'collect',
      title:'我的收藏',
      leftButton:()=> (<TouchableOpacity onPress={this._goBack.bind(this)} style={styles.buttonMenu}><Icon name="angle-left" size={30} color="#fff"/></TouchableOpacity>)
    })
  }
  _aboutHandle(){
    this.props.navigate({
      component:Page,
      name:'about',
      uri:`${httpAddress}wpPosts/getAboutUs`,
      title:'关于我们',
      leftButton:()=> (<TouchableOpacity onPress={this._goBack.bind(this)} style={styles.buttonMenu}><Icon name="angle-left" size={30} color="#fff"/></TouchableOpacity>)
    })
  }
  _serviceHandle(){
    this.props.navigate({
      component:Service,
      name:'service',
      title:'业务咨询',
      leftButton:()=> (<TouchableOpacity onPress={this._goBack.bind(this)} style={styles.buttonMenu}><Icon name="angle-left" size={30} color="#fff"/></TouchableOpacity>)
    })
  }
  _feedBackHandle(){
    this.props.navigate({
      component:Page,
      name:'feedBack',
      uri:`${httpAddress}wpPosts/feedBack`,
      title:'意见反馈',
      leftButton:()=> (<TouchableOpacity onPress={this._goBack.bind(this)} style={styles.buttonMenu}><Icon name="angle-left" size={30} color="#fff"/></TouchableOpacity>)
    })
  }
  render(){
    return(
      <View style={styles.menu}>
          <TouchableOpacity onPress={this._collectHandle.bind(this)} style={styles.item}><Icon style={styles.icon} name="heart" size={20}/><Text style={styles.text}>我的收藏</Text></TouchableOpacity>
          <TouchableOpacity onPress={this._serviceHandle.bind(this)} style={styles.item}><Icon style={styles.icon} name="question-circle" size={20}/><Text style={styles.text}>业务咨询</Text></TouchableOpacity>
          <TouchableOpacity onPress={this._aboutHandle.bind(this)} style={styles.item}><Icon style={styles.icon} name="group" size={20}/><Text style={styles.text}>关于我们</Text></TouchableOpacity>
          <TouchableOpacity onPress={this._feedBackHandle.bind(this)} style={styles.item}><Icon style={styles.icon} name="pencil-square" size={20}/><Text style={styles.text}>意见反馈</Text></TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#fff'
  },
  logoContent:{
    paddingTop:44,
    paddingBottom:20,
    alignItems:'center',
    backgroundColor:'#4078c0'
  },
  logoImage:{
    flex:1,
    width:elementScale(50),
    height:elementScale(50)
  },
  logoText:{
    color:'#fff',
    fontSize:elementScale(16),
    fontWeight:'bold',
    lineHeight:28,
    textAlign:'center'
  },
  menu:{
    marginTop:elementScale(20),
    paddingLeft:elementScale(20),
    paddingLeft:elementScale(10),
  },
  item:{
    flex:1,
    paddingLeft:10,
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#d1d1d1',
    paddingVertical:elementScale(16)
  },
  icon:{
    color:'#696969',
    width:30
  },
  text:{
    color:'#696969',
    textAlign:'left'
  },
  buttonMenu:{
    padding:5,
    marginLeft:5,
    marginRight:5,
    justifyContent:'center',
    flex:1
  }
})
