import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView
} from 'react-native';
export default class Single extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.content}>
        <WebView
          source={{uri: 'https://github.com/facebook/react-native'}}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    paddingTop:64,
    flex:1,
    backgroundColor:'#fff'
  }
})
