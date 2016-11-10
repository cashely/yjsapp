import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import MainSearch from '../common/mainSearch';
import List from '../common/imgList';
import Loading from '../common/loading';
import {connect} from 'react-redux';
import {ajaxMethod} from '../../actions/ajax';
class Bid extends Component {
  constructor(props){
    super(props);
    this.state={
      pageNo:1,
      searchString:'',
      name:'全部',
      infinite:true,
      is_loading:true
    }
  }
  //重置数据
  _reset = () => {
    this.props.dispatch({
      type:'RESET_BID'
    });
    this.setState({
      pageNo:1,
      infinite:true
    });
    setTimeout(()=>{
      this._loadBid();
    })
  }
  //搜索执行方法
  _searchHandle = (string) => {
    this.setState({
      searchString:string,
      infinite:true
    });
    this._reset();
  }
  //读取数据
  _loadBid = () => {
    if(!this.state.infinite) return false;
    this.setState({
      infinite:false,
      is_loading:true
    });
    ajaxMethod('wpPosts/getWpPostsList',{
      searchName:this.state.searchString,
      // parentTeamId:15,
      pageNo:this.state.pageNo,
      teamId:15
    }).then((res) => {
      this.props.dispatch({
        type:'LOAD_BID',
        datas:res.datas
      });
      this.setState({
        is_loading:false
      });
      setTimeout(()=>{
        if(this.props.bid.datas.length>= res.totalSize){
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
    this._loadBid();
  }
  render(){
    return(
      <View style={styles.content}>
        <View style={styles.mainBar}>
          <MainSearch  searchHandle={this._searchHandle} backgroundColor="#fff" iconColor="#666" buttonColor="#4078c0"/>
        </View>
        <List loadHandle={this._loadBid}  {...this.props} dataSource={this.props.bid.datas}/>
        <Loading isVisible={this.state.is_loading}/>
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

select = (state) => {
  return{
    bid:state.bid
  }
}

export default connect(select)(Bid);
