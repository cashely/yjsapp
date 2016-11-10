import React,{Component} from 'react';
import {
  View,
  Text,
  AsyncStorage,
  InteractionManager,
  StyleSheet
} from 'react-native';
import ImgList from '../common/imgList';

import {connect} from 'react-redux';
import {ajaxMethod} from '../../actions/ajax';
import NavigatorHeader from '../common/navigatorHeader';
class Collect extends Component {
  constructor(props){
    super(props);
    this.state={
      pageNo:1,
      infinite:true
    }
  }
  //重置数据
  _reset = () => {
    this.props.dispatch({
      type:'RESET_COLLECT'
    })
    setTimeout(()=>{
      this._loadCollect();
    })
  }
  //读取数据
  _loadCollect = async () => {
    if(!this.state.infinite) return false;
    this.setState({
      infinite:false
    });
    ajaxMethod('wpPosts/getWpPostsKeepList',{
      postIds: await AsyncStorage.getItem('collects'),
      pageNo:this.state.pageNo
    }).then((res) => {
      this.props.dispatch({
        type:'LOAD_COLLECT',
        datas:res.datas
      });
      setTimeout(()=>{
        if(this.props.collect.datas.length>= res.totalSize){
          this.setState({
            infinite:false
          });
        }else{
          this.setState({
            infinite:true,
            pageNo:this.state.pageNo+1
          })
        }
      })
    })
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      this._loadCollect();
    })
  }
  componentWillUnmount(){
    his.props.dispatch({
      type:'RESET_COLLECT'
    });
  }
  render(){
    return(
      <View style={styles.content}>
        <NavigatorHeader {...this.props} isBack={true} title={this.props.title}/>
        <ImgList loadHandle={this._loadCollect} dataSource = {this.props.collect.datas} {...this.props}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#fff'
  }
});
select = (state) => {
  return{
    collect:state.collect
  }
}

export default connect(select)(Collect);
