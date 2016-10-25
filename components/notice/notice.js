import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import MainSearch from '../common/mainSearch';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Notice extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.content}>
        <MainSearch backgroundColor="#e1e1e1" iconColor="#666" buttonColor="#4078c0"/>
      </View>
    )
  }
}

const styles  = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#fff'
  }
})
