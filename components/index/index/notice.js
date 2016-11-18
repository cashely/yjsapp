import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
import List from './list';
export default class Notice extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.content}>
        <View style={styles.left}>
          <TouchableOpacity onPress={this.props.changeTabHandle}>
            <Image resizeMode="contain" source={{uri:this.props.url}} style={styles.images}/>
            <Text style={styles.title}>
              {this.props.title}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.right}>
          <List {...this.props} dataSource={this.props.dataSource}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flexDirection:'row',
  },
  left:{
    width:80,
    height:130
  },
  images:{
    width:80,
    height:130,
    position:'absolute',
    left:0,
    top:0
  },
  title:{
    fontSize:20,
    color:'#fff'
  },
  right:{
    flex:1
  }
})
