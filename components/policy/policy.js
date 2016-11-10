import React,{Component} from 'react';
import {
  View,
  Text,
  InteractionManager,
  StyleSheet
} from 'react-native';
import MainSearch from '../common/mainSearch';
import List from '../common/imgList';
import Select from '../common/select';
import Loading from '../common/loading';
import {connect} from 'react-redux';
import {ajaxMethod} from '../../actions/ajax';

class Policy extends Component {
  constructor(props){
    super(props);
    this.state={
      id:0,
      pageNo:1,
      searchString:'',
      searchType:0,
      name:'全部',
      infinite:true,
      is_loading:true
    }
  }
  //确定选择分类
  _sureButton(value){
    this.setState({
      id:value
    });
    this.setState({
      searchType:this.props.policy.menus[value].id
    });
    this._reset();
  }
  //重置数据
  _reset = () => {
    this.props.dispatch({
      type:'RESET_POLICY'
    });
    this.setState({
      pageNo:1
    });
    setTimeout(()=>{
      this._loadPolicy();
    })
  }
  //搜索执行方法
  _searchHandle = (string) => {
    this.setState({
      searchString:string
    });
    this._reset();
  }
  //读取数据
  _loadPolicy = () => {
    if(!this.state.infinite) return false;
    this.setState({
      infinite:false,
      is_loading:true
    });
    ajaxMethod('wpPosts/getWpPostsList',{
      searchName:this.state.searchString,
      parentTeamId:16,
      pageNo:this.state.pageNo,
      teamId:this.state.searchType
    }).then((res) => {
      this.props.dispatch({
        type:'LOAD_POLICY',
        datas:res.datas
      });
      this.setState({
        is_loading:false
      });
      setTimeout(()=>{
        console.log(this.props.policy.datas.length>= res.totalSize);
        if(this.props.policy.datas.length>= res.totalSize){
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
  //读取小分类菜单
  _loadFilterList = () => {
    ajaxMethod('wpTerms/getWpTermsList',{
      parentTeamId:16
    }).then((res) => {
      this.props.dispatch({
        type:'LOAD_POLICY_MENU',
        datas:res.datas
      })
    })
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      this._loadFilterList();
      this._loadPolicy();
    })
  }
  render(){
    return(
      <View style={styles.content}>
          <View style={styles.mainBar}>
            {
                !!this.props.policy.menus.length ? <Select value={this.state.id} menuItems={this.props.policy.menus} sureButton={this._sureButton.bind(this)}/> : null
            }
            <MainSearch searchHandle={this._searchHandle} backgroundColor="#fff" iconColor="#666" buttonColor="#4078c0"/>
          </View>
          <List loadHandle={this._loadPolicy}  {...this.props} dataSource={this.props.policy.datas}/>
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
    policy:state.policy
  }
}

export default connect(select)(Policy);
