import React,{Component} from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet
} from 'react-native';
export default class Share extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Modal
        animationType={'slide'}
        visible={this.props.isVisiable}
        transparent={true}
      >
        <View style={styles.content}>
          <View style={styles.cancelButton}>
            <TouchableOpacity style={{flex:1}}  onPress={this.props.hideHandle}>
              <View></View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGroup}>
            <Button text="qq" imgUrl="http://pic2.cxtuku.com/00/15/13/b293a6b880cd.jpg"/>
            <Button text="qq空间" imgUrl="http://imgsrc.baidu.com/baike/pic/item/a8773912b31bb0515019d822327adab44aede0ff.jpg"/>
            <Button text="微信好友" imgUrl="http://www.come8000.com/UpFile/localhost/b/2013-11-12/13842348656EB6KDe7BqqKG7n.jpg"/>
            <Button text="朋友圈" imgUrl="http://lywb.lyd.com.cn/images/2014-05/07/1399418216687cls455_b.jpg"/>
          </View>
        </View>
      </Modal>
    )
  }
}
class Button extends Component {
  render(){
    return(
      <TouchableOpacity style={styles.button}>
        <Image source={{uri:this.props.imgUrl}} style={styles.image}/>
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
