import React,{Component} from 'react';
import {
  View,
  Text,
  InteractionManager,
  StyleSheet
} from 'react-native';
import MainSearch from '../common/mainSearch';
import ImgList from '../common/imgList';
import Select from '../common/select';
import Loading from '../common/loading';
import {connect} from 'react-redux';
import {ajaxMethod} from '../../actions/ajax';
class News extends Component {
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
      searchType:this.props.news.menus[value].id
    });
    this._reset();
  }
  //重置数据
  _reset = () => {
    this.props.dispatch({
      type:'RESET_NEWS'
    });
    this.setState({
      pageNo:1
    });
    setTimeout(()=>{
      this._loadNews();
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
  _loadNews = () => {
    if(!this.state.infinite) return false;
    this.setState({
      infinite:false,
      is_loading:true
    });
    ajaxMethod('wpPosts/getWpPostsList',{
      searchName:this.state.searchString,
      parentTeamId:14,
      pageNo:this.state.pageNo,
      teamId:this.state.searchType
    }).then((res) => {
      this.props.dispatch({
        type:'LOAD_NEWS',
        datas:res.datas
      });
      this.setState({
        is_loading:false
      });
      setTimeout(()=>{
        if(this.props.news.datas.length>= res.totalSize){
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
      parentTeamId:14
    }).then((res) => {
      this.props.dispatch({
        type:'LOAD_NEWS_MENU',
        datas:res.datas
      })
    })
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      this._loadFilterList();
      this._loadNews();
    })
  }
  render(){
    return(
      <View style={styles.content}>
        <View style={styles.mainBar}>
          {
              !!this.props.news.menus.length ? <Select value={this.state.id} menuItems={this.props.news.menus} sureButton={this._sureButton.bind(this)}/> : null
          }
          <MainSearch searchHandle={this._searchHandle} backgroundColor="#fff" iconColor="#666" buttonColor="#4078c0"/>
        </View>
        <ImgList loadHandle={this._loadNews} dataSource = {this.props.news.datas} {...this.props}/>
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
    news:state.news
  }
}

export default connect(select)(News);
