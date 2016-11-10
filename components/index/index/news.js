import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  PixelRatio,
  StyleSheet
} from 'react-native';


import {elementScale,elementHeight} from '../../common/functions';

import Title from './title';
export default class News extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <View>
        <Title changeTabHandle={this.props.changeTabHandle} title={this.props.title}/>
        <View style={styles.content}>
          {
            Array.from(this.props.dataSource,(ele)=>{
              return <List key={`index_news${ele.id}`} dataSource={ele} />
            })
          }
        </View>
      </View>
    )
  }
}

class List extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <View style={styles.item}>
        <Image source={{uri:this.props.dataSource.mainImg}} style={styles.itemImg}/>
        <Text numberOfLines={2} style={styles.itemTitle}>{this.props.dataSource.postTitle}</Text>
        <Text style={styles.itemTime}>{this.props.dataSource.postDate}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flexWrap:'wrap',
    alignItems:'flex-start',
    justifyContent:'space-around',
    flexDirection:'row'
  },
  item:{
    width:elementScale(172),
    height:elementScale(180),
    margin:elementScale(5),
    padding:elementScale(5),
    borderWidth:1,
    borderColor:'#e1e1e1'
  },
  itemImg:{
    width:elementScale(160),
    height:elementScale(100)
  },
  itemTitle:{
    flex:1,
    marginTop:elementScale(5),
    fontSize:elementScale(14),
    lineHeight:18
  },
  itemTime:{
    height:elementScale(15),
    justifyContent:'center',
    fontSize:elementScale(10),
    textAlign:'right',
    color:'#666'
  }
})
