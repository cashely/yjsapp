import React,{Component} from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
  ToastAndroid,
  Alert
} from 'react-native';
import {httpAddress} from '../../config/index';
// import * as WeChat from 'react-native-wechat';
export default class Sharea extends Component {
  constructor(props){
    super(props);
    // WeChat.registerApp('wx1197c17e466681b6');
    this.state = {
      shareInfo:{
        type: 'news',
        title: this.props.title,
        description: this.props.description,
        webpageUrl: `${httpAddress}wpPosts/getWpPostsdetail?id=${this.props.id}`,
        imageUrl:'www.baidu.com'
      },
      isInstallWX:false
    }

  }
  _shareWx = async () => {
    this.props.hideHandle();
    try {
      await WeChat.shareToSession(this.state.shareInfo)
    } catch (e) {
      ToastAndroid.show(e,ToastAndroid.SHORT);
    }

  }
  _shareTimeLine = async () => {
    try {
      await WeChat.shareToTimeline(this.state.shareInfo).then((res) =>{
        console.log(res);
      })
    } catch (e) {

    }
  }
  componentDidMount(){
    this.props.hideHandle();
    try {
      WeChat.isWXAppInstalled().then((res) => {
        this.setState({
          isInstallWX:true
        })
      })
    } catch (e) {
      ToastAndroid.show('分享错误',ToastAndroid.SHORT);
    }
  }
  render(){
    return(
      <Modal
        animationType={'slide'}
        visible={this.props.isVisiable}
        transparent={true}
        onRequestClose={this.props.hideHandle}
      >
        <View style={styles.content}>
          <View style={styles.cancelButton}>
            <TouchableOpacity style={{flex:1}}  onPress={this.props.hideHandle}>
              <View></View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <Button style={styles.buttonShare} text="微信好友" action={this._shareWx}>
              <Image source={require('../../static/images/icon-wx-60.png')} style={styles.image}/>
            </Button>
            <Button style={styles.buttonShare} text="朋友圈" action={this._shareTimeLine}>
              <Image source={require('../../static/images/icon-timeLine-60.png')} style={styles.image}/>
            </Button>
          </View>
        </View>
      </Modal>
    )
  }
}
class Button extends Component {
  render(){
    return(
      <TouchableOpacity onPress={this.props.action} style={styles.button}>
        {this.props.children}
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    backgroundColor:'rgba(0,0,0,0.7)',
    flex:1
  },
  cancelButton:{
    flex:1
  },
  buttonGroup:{
    width:Dimensions.get('window').width,
    paddingVertical:20,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  button:{
    flex:1,
    marginHorizontal:10,
    alignItems:'center'
  },
  image:{
    width:50,
    height:50,
    marginBottom:10,
    borderRadius:25
  },
  text:{
    fontSize:10,
    color:'#333',
    textAlign:'center'
  }
})
