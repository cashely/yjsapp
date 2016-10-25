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
    const datas=[
      {
        id:'85738',
        imgSrc:"http://pic44.nipic.com/20140717/12432466_121957328000_2.jpg",
        title:"广东省医用耗材业务交流会在省药品交易中心",
        time:"2016-07-19"
      },
      {
        id:'77560',
        imgSrc:"http://img3.redocn.com/tupian/20150430/mantenghuawenmodianshiliangbeijing_3924704.jpg",
        title:"数据部荣获“广东省工人先锋号”荣誉称号",
        time:"2016-07-20"
      },
      {
        id:'31073',
        imgSrc:"http://img2081.poco.cn/mypoco/myphoto/20111205/23/55975772201112052331312182160762459_016.jpg",
        title:"抵御耐药菌感染的“尖刀利器”",
        time:"2016-07-21"
      },
      {
        id:'67493',
        imgSrc:"http://dl.bizhi.sogou.com/images/2012/03/14/140763.jpg",
        title:"温国辉副省长调研广东省药品交易中心",
        time:"2016-07-22"
      }
    ]

    return(
      <View>
        <Title title={this.props.title}/>
        <View style={styles.content}>
          {
            Array.from(datas,(ele)=>{
              return <List key={ele.id} dataSource={ele} />
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
        <Image source={{uri:this.props.dataSource.imgSrc}} style={styles.itemImg}/>
        <Text style={styles.itemTitle}>{this.props.dataSource.title}</Text>
        <Text style={styles.itemTime}>{this.props.dataSource.time}</Text>
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
    lineHeight:elementScale(18)
  },
  itemTime:{
    height:elementScale(15),
    justifyContent:'center',
    fontSize:elementScale(10),
    textAlign:'right',
    color:'#666'
  }
})
