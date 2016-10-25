//首页幻灯片
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
            <Image source={{uri:'http://photo.enterdesk.com/2009-4-21/200901241609531378.png',width:Dimensions.get('window').width,height:150}}/>
          </View>
          <View style={styles.image}>
            <Image source={{uri:'http://up.qqjia.com/z/17/tu17742_2.jpg',width:Dimensions.get('window').width,height:150}}/>
          </View>
          <View style={styles.image}>
            <Image source={{uri:'http://image.yy.com/yywebalbumbs2bucket/1b760f2692ca49ba83d261d071fd2928_1467605341514.png',width:Dimensions.get('window').width,height:150}}/>
          </View>
          <View style={styles.image}>
            <Image source={{uri:'http://pic28.nipic.com/20130424/11588775_115415688157_2.jpg',width:Dimensions.get('window').width,height:150}}/>
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
