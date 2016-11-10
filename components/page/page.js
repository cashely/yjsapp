import React,{Component} from 'react';
import {
  View,
  Text,
  WebView,
  StyleSheet
} from 'react-native';
import NavigatorHeader from '../common/navigatorHeader';
export default class About extends Component {
  render(){
    console.log(this.props.uri);
    return(
      <View style={styles.content}>
        <NavigatorHeader {...this.props} isBack={true} title={this.props.title}/>
        <WebView
          source={{uri: `${this.props.uri}`}}
          automaticallyAdjustContentInsets={true}
          scalesPageToFit={true}
          startInLoadingState={true}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#fff'
  }
});
