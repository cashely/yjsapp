//首页幻灯片
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import Single from '../../single/single';
import NavigatorTitle from '../../common/navigatorTitle';
export default class Slider extends Component{
  _linkHandle(title,id,postExcerpt){
    this.props.navigator.push({
      component:Single,
      name:'single',
      id:id,
      goBack:this._goBack.bind(this),
      isShare:true,
      isCollected:true,
      navigator:this.props.navigator,
      title:title,
      postExcerpt:postExcerpt
    })
  }
  _goBack(){
    this.props.navigator.pop();
  }
  render(){
    return(
      <View>
        <Swiper style={styles.imagesBar} autoplay={true} showsPagination={true} height={150}>
          {
            Array.from(this.props.dataSource,(ele)=>{
              return (
                <TouchableOpacity key={`slider-${ele.id}`} onPress={this._linkHandle.bind(this,ele.postTitle,ele.id,ele.postExcerpt)} style={styles.image}>
                  <Image source={{uri:`${ele.mainImg}`,width:Dimensions.get('window').width,height:150}}/>
                </TouchableOpacity>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image:{
    flex:1,
    backgroundColor:'#d1d1d1'
  },
  imagesBar:{

  }
});
