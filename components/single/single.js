import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView
} from 'react-native';
import {httpAddress} from '../../config/index';
import NavigatorHeader from '../common/navigatorHeader';
export default class Single extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.content}>
        <NavigatorHeader {...this.props} title={this.props.title}/>
        <WebView
          source={{uri: `${httpAddress}wpPosts/getWpPostsdetail?id=${this.props.id}`}}
          style={{
            paddingHorizontal:10
          }}
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
})
