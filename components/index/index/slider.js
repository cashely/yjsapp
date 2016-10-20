import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
export default class Slider extends Component{
  render(){
    return(
      <View>
        <Swiper style={styles.imagesBar} autoplay={true} showsPagination={true} height={150}>
          <View style={styles.image}>
            <Image source={{uri:'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1292341536,615211142&fm=85&s=68332A9E8E9A0EC806B325C1030030BA',width:Dimensions.get('window').width,height:150}}/>
          </View>
          <View style={styles.image}>
            <Image source={{uri:'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1292341536,615211142&fm=85&s=68332A9E8E9A0EC806B325C1030030BA',width:Dimensions.get('window').width,height:150}}/>
          </View>
          <View style={styles.image}>
            <Image source={{uri:'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1292341536,615211142&fm=85&s=68332A9E8E9A0EC806B325C1030030BA',width:Dimensions.get('window').width,height:150}}/>
          </View>
          <View style={styles.image}>
            <Image source={{uri:'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1292341536,615211142&fm=85&s=68332A9E8E9A0EC806B325C1030030BA',width:Dimensions.get('window').width,height:150}}/>
          </View>
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  image:{
    flex:1
  },
  imagesBar:{

  }
});