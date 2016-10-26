import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import MainSearch from '../common/mainSearch';
import List from '../index/index/list';
import Select from '../common/select';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Picker from 'react-native-picker';
export default class Notice extends Component {
  constructor(props){
    super(props);
    this.state={
      isVisible:false
    }

  }
  _sureButton(value){

    this.setState({
      isVisible:false
    });
  }
  _cancelButton(){
    this.setState({
      isVisible:false
    })
  }
  render(){
    const datas = [{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:true,
      time:'2016-08-01',
      imgUrl:'http://img1.imgtn.bdimg.com/it/u=2411021168,1510233833&fm=21&gp=0.jpg'
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
      imgUrl:'http://img5.imgtn.bdimg.com/it/u=1096487389,4227886736&fm=21&gp=0.jpg'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-04',
      imgUrl:'http://img5.imgtn.bdimg.com/it/u=397736957,2414835366&fm=21&gp=0.jpg'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-05',
      imgUrl:'http://img4.imgtn.bdimg.com/it/u=220980845,3087446489&fm=21&gp=0.jpg'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-06',
      imgUrl:'http://img3.imgtn.bdimg.com/it/u=2088906315,2059290942&fm=21&gp=0.jpg'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-07',
      imgUrl:'http://img1.imgtn.bdimg.com/it/u=3881750147,3677005026&fm=21&gp=0.jpg'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-08',
      imgUrl:'http://img3.imgtn.bdimg.com/it/u=3820515754,1064316039&fm=21&gp=0.jpg'
    },{
      type:'药品交易',
      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
      isNew:false,
      time:'2016-08-09',
      imgUrl:'http://img3.imgtn.bdimg.com/it/u=4284362590,246341097&fm=21&gp=0.jpg'
    }];
    return(
      <View style={styles.content}>
        <Select value={"1"} isVisible={this.state.isVisible} sureButton={this._sureButton.bind(this)} cancelButton={this._cancelButton.bind(this)}/>
        <MainSearch backgroundColor="#e1e1e1" iconColor="#666" buttonColor="#4078c0"/>
        <List {...this.props} dataSource={datas}/>
        <TouchableOpacity onPress={()=>{this.setState({isVisible:true})}}>
          <Text>打开</Text>
        </TouchableOpacity>
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