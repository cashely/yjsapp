import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import ImgList from '../common/imgList';
export default class Collect extends Component {
  render(){
    const datas = [{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:true,
      time:'2016-08-01',
      imgUrl:'http://i-7.vcimg.com/trim/64a85d3b43bd15716262516837e0a59b181063/trim.jpg'
    },{
      type:'医用耗材',
      title:'一期医用耗材生产企业报名系统操作培训的通知',
      isNew:true,
      time:'2016-08-02'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-03',
      imgUrl:'http://i-7.vcimg.com/trim/799cc311c28bee38e8ef2ffde5c826cc475781/trim.jpg'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-04',
      imgUrl:'http://real-time.oss-cn-beijing.aliyuncs.com/images/201411/26101435006.jpg'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-05'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-06',
      imgUrl:'http://image16.poco.cn/mypoco/myphoto/20150215/22/52942339201502152208245263852135818_010.jpg'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-07',
      imgUrl:'http://n1.itc.cn/img8/wb/smccloud/recom/2015/11/05/144665627453811059.JPEG'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-08'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-09'
    }];
    return(
      <View style={styles.content}>
        <ImgList {...this.props} dataSource={datas}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    paddingTop:64,
    backgroundColor:'#fff'
  }
});
