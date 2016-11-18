import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
export default class MinAd extends Component {
  render(){
    return(
      <View style={styles.content}>
          <Image style={styles.image} resizeMode="contain" source={require('../../static/images/ad_v2.jpg')}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  image:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').width/650 * 130
  }
})
