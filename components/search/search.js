import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
export default class Search extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.content}>
        <Text>搜索</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content:{
    backgroundColor:'#fff',
    paddingTop:64,
    flex:1
  }
})
