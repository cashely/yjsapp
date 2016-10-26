import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import MainSearch from '../common/mainSearch';
import List from '../index/index/list';
export default class Bid extends Component {
  render(){
    const datas = [{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:true,
      time:'2016-08-01',
      imgUrl:'http://img1.imgtn.bdimg.com/it/u=2411021168,1510233833&fm=21&gp=0.jpg'
    },{
      title:'一期医用耗材生产企业报名系统操作培训的通知',
      isNew:true,
      time:'2016-08-02'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-03',
      imgUrl:'http://img5.imgtn.bdimg.com/it/u=1096487389,4227886736&fm=21&gp=0.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-04',
      imgUrl:'http://img5.imgtn.bdimg.com/it/u=397736957,2414835366&fm=21&gp=0.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-05',
      imgUrl:'http://img4.imgtn.bdimg.com/it/u=220980845,3087446489&fm=21&gp=0.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-06',
      imgUrl:'http://img3.imgtn.bdimg.com/it/u=2088906315,2059290942&fm=21&gp=0.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-07',
      imgUrl:'http://img1.imgtn.bdimg.com/it/u=3881750147,3677005026&fm=21&gp=0.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-08',
      imgUrl:'http://img3.imgtn.bdimg.com/it/u=3820515754,1064316039&fm=21&gp=0.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-09',
      imgUrl:'http://img3.imgtn.bdimg.com/it/u=4284362590,246341097&fm=21&gp=0.jpg'
    }];
    return(
      <View style={styles.content}>
        <MainSearch backgroundColor="#e1e1e1" iconColor="#666" buttonColor="#4078c0"/>
        <List {...this.props} dataSource={datas}/>
      </View>
    )
  }
}
const styles  = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#fff'
  }
})
