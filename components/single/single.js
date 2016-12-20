import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
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
      visible: false,
      isDowning:false
    };
    if(Platform.OS == 'android'){
      var RNFetchBlob = require('react-native-fetch-blob');
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

  _getmineType(string){
    let type;
    switch (string) {
      case 'pdf' : type = 'application/pdf'; break;
      case 'xls' : case 'xlsx' : type = 'application/vnd.ms-excel'; break;
      case 'doc' : case 'docx' : type = 'application/msword'; break;
      default: type = undefined;
    }
    return type;
  }

  _subFileType(string){
    console.log(string);
    if(string.indexOf('.') == -1) return false;
    let pointIndex = string.lastIndexOf('.')+1;
    let lastString =  string.slice(pointIndex);
    console.log(lastString,'3');
    return lastString.toLowerCase();
  }

  _onNavigationStateChange = (navState) => {
    if(Platform.OS !== 'android' || this.state.isDowning) return false;
    const android = RNFetchBlob.android
    const url = navState.url;
    console.log(url);
    let fileType = this._subFileType(url);
    console.log(fileType,'1');
    fileType = this._getmineType(fileType);
    console.log(fileType,'2');
    if(fileType){
      this.setState({
        isDowning:true
      });
      RNFetchBlob.config({
        addAndroidDownloads : {
          useDownloadManager : true,
          title : decodeURIComponent(navState.url.slice(navState.url.lastIndexOf('/')+1,navState.url.lastIndexOf('.'))),
          mime : fileType,
          mediaScannable : true,
          notification : true,
        }
      })
      .fetch('GET', navState.url)
      .then((res) => {
          this.setState({
            isDowning:false
          });
          android.actionViewIntent(res.path(), fileType)
      })
    }

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
          onNavigationStateChange={this._onNavigationStateChange}
        />
        <Share isVisiable={this.state.visible} title={this.props.title} id={this.props.id} description={this.props.postExcerpt} hideHandle={this._onCancel.bind(this)} />
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
