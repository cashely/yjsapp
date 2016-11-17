import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView
} from 'react-native';
import {httpAddress} from '../../config/index';
import NavigatorTitle from '../common/navigatorTitle';
import Share from '../common/share';
import NavigatorHeader from '../common/navigatorHeader';
// import Share, {ShareSheet, Button} from 'react-native-share';
export default class Single extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
  }
  _showShare = ()=> {
    console.log('asasas');
    this.setState({
      visible:true
    });
  }
  _onCancel(){
    this.setState({
      visible:false
    });
  }
  render(){

    return(
      <View style={styles.content}>
        <NavigatorHeader {...this.props} title={()=> <NavigatorTitle showShare={this._showShare} goBack={this.props.goBack} isShare={true} isCollected={true} id={this.props.id} navigator={this.props.navigator} title={this.props.title}/>}/>
        <WebView
          source={{uri: `${httpAddress}wpPosts/getWpPostsdetail?id=${this.props.id}`}}
          style={{
            paddingHorizontal:10
          }}
          automaticallyAdjustContentInsets={true}
          scalesPageToFit={true}
          startInLoadingState={true}
        />
        <Share isVisiable={this.state.visible} title={this.props.title} id={this.props.title} description={this.props.postExcerpt} hideHandle={this._onCancel.bind(this)} />
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
