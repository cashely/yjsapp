import React,{Component} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native';
import Index from '../index/index';
export default class Launch extends Component {
  componentDidMount(){
    setTimeout(()=>{
      this.props.navigator.replace({
          name:'index',
          component:Index,
          _drawerOpenHandle:this.props.toggleDrawer
      });
    },2000)
  }
  render(){
    return(
      <View style={{flex:1}}>
        <Image style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} source={require('../../static/images/launch.jpg')}/>
        <Text>sdsdsds</Text>
      </View>
    )
  }
}
