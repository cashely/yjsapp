import React,{Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  AsyncStorage,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from './share';
export default class NavigatorTitle extends Component {
  constructor(props){
    super(props);
    console.log(this.props.id,'id');
    this.state={
      isVisiable:false,
      isCollected:false
    }
    // this._clearCollect();
  }
  componentWillMount(){
    this._hasCollected();
  }
  _goBack(){
    this.props.goBack();
  }
  _showModal(){
    this.setState({isVisiable:true});
  }
  _hideModal(){
    this.setState({isVisiable:false});
  }
  _collectHandle(id){
    this.setState({
      isCollected:!this.state.isCollected
    });
    this._addOrRemoveCollect(id);
  }
  _hasCollected = async () => {
    let collects = await AsyncStorage.getItem('collects');
    collects = JSON.parse(collects);
    if(collects instanceof Array && collects.indexOf(this.props.id) != -1){
      this.setState({
        isCollected:!this.state.isCollected
      });
    }
  }

  //清除本地收藏的值
  _clearCollect = () => {
    AsyncStorage.removeItem('collects', async (res)=>{
      console.log('清除值成功:',await AsyncStorage.getItem('collects'));
    })
  }

  //判断值是否存在在数组里面，如果存在去掉，不存在则添加进去
  _addOrRemoveCollect = async (id) => {

    let collects = await AsyncStorage.getItem('collects');
      console.log(collects,'取collects');
    if(!!collects && !(collects instanceof Array)){
      collects = JSON.parse(collects);
      if(collects.indexOf(id)  == -1){
        collects.push(id);
      }else{
        collects.splice(collects.indexOf(id),1);
      }
      //测试id是否为数组
      console.log(collects,'输入前的数组1');
      await AsyncStorage.setItem('collects',JSON.stringify(collects));
    }else if(!collects){
      collects = [];
      collects.push(id);
      //测试id是否为数组
      console.log(collects,'输入前的数组2');
      await AsyncStorage.setItem('collects',JSON.stringify(collects));
    }else{
      return false;
    }
  }

  render(){
    return(
      <View style={styles.content}>
        <TouchableOpacity onPress={this._goBack.bind(this)} style={styles.buttonMenu}>
          <Icon style={styles.buttonIcon} name="angle-left" size={30}/>
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.titleText}>
          {this.props.title}
        </Text>
        <View style={styles.right}>
          {
            this.props.isShare ? <ShareButton pressHandle={this._showModal.bind(this)}/> : null
          }
          {
            this.props.isCollected ? <CollectButton isCollected={this.state.isCollected} pressHandle={this._collectHandle.bind(this,this.props.id)}/> : null
          }
        </View>
        <Share hideHandle={this._hideModal.bind(this)} isVisiable={this.state.isVisiable}/>
      </View>
    )
  }
}

class CollectButton extends Component {
  render(){
    return(
      <TouchableOpacity style={styles.buttonMenu} onPress={this.props.pressHandle}>
        <Icon name={this.props.isCollected ? "heart" : "heart-o"} size={15} color="#fff"/>
      </TouchableOpacity>
    )
  }
}
class ShareButton extends Component {
  render(){
    return(
      <TouchableOpacity onPress={this.props.pressHandle} style={styles.buttonMenu}>
        <Icon name="share" size={15} color="#fff"/>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flexDirection:'row',
    height:30,
    alignItems:'center',
    justifyContent:'center'

  },
  buttonMenu:{
    marginHorizontal:10
  },
  buttonIcon:{
    color:'#fff'
  },
  titleText:{
    flex:1,
    fontSize:16,
    flexWrap:'nowrap',
    color:'#fff',
    overflow:'hidden'
  },
  right:{
    flexDirection:'row',
    alignItems:'center'
  }
})
