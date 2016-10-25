import React,{Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {elementScale,elementHeight} from './functions';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Drawer extends Component {
  constructor(props){
    super(props)
  }

  render(){
      return(
          <View style={styles.content}>
            <Logo/>
            <Menu/>
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
  render(){
    return(
      <View style={styles.menu}>
          <TouchableOpacity style={styles.item}><Icon style={styles.icon} name="heart" size={20}/><Text style={styles.text}>我的收藏</Text></TouchableOpacity>
          <TouchableOpacity style={styles.item}><Icon style={styles.icon} name="question-circle" size={20}/><Text style={styles.text}>业务咨询</Text></TouchableOpacity>
          <TouchableOpacity style={styles.item}><Icon style={styles.icon} name="group" size={20}/><Text style={styles.text}>关于我们</Text></TouchableOpacity>
          <TouchableOpacity style={styles.item}><Icon style={styles.icon} name="pencil-square" size={20}/><Text style={styles.text}>意见反馈</Text></TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#333'
  },
  logoContent:{
    paddingTop:44,
    alignItems:'center'

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
    lineHeight:elementScale(28),
    textAlign:'center'
  },
  menu:{
    marginTop:elementScale(20),
    paddingLeft:elementScale(30),
  },
  item:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:elementScale(16)
  },
  icon:{
    color:'#fff',
    width:30
  },
  text:{
    color:'#fff',
    textAlign:'left'
  }
})
