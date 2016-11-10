import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Spinner from 'react-native-spinkit';
export default class Spinkit extends Component {
    constructor(props){
      super(props);
      this.state = {
        size:50,
        color:'#4078c0'
      }
    }
    render(){
      return(
        <View style={styles.content}>
          <Spinner isVisible={true} size={this.state.size} type='Wave' color={this.state.color}/>
        </View>
      )
    }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    minHeight:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  }
})
