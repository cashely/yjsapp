import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import MainSearch from '../common/mainSearch';
import List from '../index/index/list';
export default class Train extends Component {
  render(){
    const datas = [{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:true,
      time:'2016-08-01',
      imgUrl:'http://g.hiphotos.baidu.com/zhidao/pic/item/a71ea8d3fd1f413491fb9cbe271f95cad0c85e25.jpg'
    },{
      title:'一期医用耗材生产企业报名系统操作培训的通知',
      isNew:true,
      time:'2016-08-02',
      imgUrl:'http://h.hiphotos.baidu.com/zhidao/pic/item/29381f30e924b8994ef979bd6e061d950b7bf66a.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-03',
      imgUrl:'http://pic.baike.soso.com/p/20140514/20140514092502-89274376.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-04',
      imgUrl:'http://upload.cccnews.com.cn/2014/1124/1416814817316.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-05',
      imgUrl:'http://att.bbs.duowan.com/forum/201307/11/150628rtjmtk2cjtij8x2m.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-06',
      imgUrl:'http://img5.pcpop.com/ArticleImages/picshow/0x0/20110620/2011062017385043637.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-07',
      imgUrl:'http://i-7.vcimg.com/trim/3e9cb413e355e3d2e35a28b2d9bfb2fb232003/trim.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-08',
      imgUrl:'http://www.cdsoso.org/images/w/EeKTdmww.jpg'
    },{
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-09',
      imgUrl:'http://imgsrc.baidu.com/forum/pic/item/b90e7bec54e736d1c8ea234f9b504fc2d46269f8.jpg'
    }];
    return(
      <View style={styles.content}>
        <View style={styles.mainBar}>
          <MainSearch backgroundColor="#fff" iconColor="#666" buttonColor="#4078c0"/>
        </View>
        <List {...this.props} dataSource={datas}/>
      </View>
    )
  }
}
const styles  = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#fff'
  },
  mainBar:{
    height:44,
    borderBottomWidth:1,
    backgroundColor:'#e1e1e1',
    borderBottomColor:'#d1d1d1',
    paddingHorizontal:10,
    flexDirection:'row',
    alignItems:'center'
  }
})
