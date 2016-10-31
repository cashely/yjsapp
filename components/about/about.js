import React,{Component} from 'react';
import {
  View,
  Text,
  WebView,
  StyleSheet
} from 'react-native';
import NavigatorTitle from '../common/navigatorTitle';
export default class About extends Component {
  render(){
    return(
      <View style={styles.content}>
        <WebView source={{uri: 'https://www.baidu.com'}}/>
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
});
