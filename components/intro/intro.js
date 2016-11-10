import React,{Component} from 'react';
import {
  View,
  AsyncStorage,
  Dimensions,
  Image,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
export default class Intro extends Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: true
    }
  }
  _hideModal(){
    this.setState({
      isVisible:false
    })
  }
  render(){
    return(
      <Modal
        transparent={false}
        visible={this.state.isVisible}
        animationType="slide"
      >
        <View style={styles.content}>
          <Swiper autoplay={true} showsPagination={true} loop={false} autoplay={false} height={Dimensions.get('window').height}>
            <View style={styles.page}>
              <Image style={styles.img} source={{uri:'http://f.hiphotos.baidu.com/zhidao/pic/item/500fd9f9d72a6059f066af682834349b033bba4a.jpg'}}/>
            </View>
            <View style={styles.page}>
              <Image style={styles.img} source={{uri:'http://imgsrc.baidu.com/forum/pic/item/0df3d7ca7bcb0a46b95746736b63f6246b60af07.jpg'}}/>
            </View>
            <View style={styles.page}>
              <Image style={styles.img} source={{uri:'http://img226.poco.cn/mypoco/myphoto/20140427/19/56456192201404271936293331650990392_005.jpg'}}/>
            </View>
            <View style={styles.page}>
              <TouchableOpacity onPress={this._hideModal.bind(this)} style={styles.startButton}>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>
                    开始体验
                  </Text>
                </View>
              </TouchableOpacity>
              <Image style={styles.img} source={{uri:'http://img2.78dm.net/forum/201402/20/170812fv4gdfj4e6vjcdzc.jpg'}}/>
            </View>
          </Swiper>
        </View>
      </Modal>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1
  },
  pageGroup:{
    flex:1,
    backgroundColor:'blue'
  },
  page:{
    backgroundColor:'#000'
  },
  img:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
  },
  startButton:{
    position:'absolute',
    bottom:100,
    zIndex:2,
    width:Dimensions.get('window').width,

  },
  buttonView:{
    borderRadius:40,
    flex:1,
    paddingVertical:10,
    marginHorizontal:20,
    backgroundColor:'rgba(255,255,255,0.4)',
    borderWidth:2,
    borderColor:'#fff',
  },
  buttonText:{
    color:'#fff',
    textAlign:'center',
    fontSize:16
  }
})
