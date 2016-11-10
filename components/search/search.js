import React,{Component} from 'react';
import {
  View,
  Text,
  Platform,
  Alert,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import List from '../common/imgList';
import NavigatorHeader from '../common/navigatorHeader';
import {ajaxMethod} from '../../actions/ajax';
import SearchHeader from './searchHeader';
import Loading from '../common/loading';
class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      infinite:true,
      pageNo:1,
      is_loading:false
    }
  }
  _searchAction = (searchString) => {
    this._resetSearch();
    setTimeout(()=>{
      this._loadSearch(searchString);
    });

  }

  _loadSearch = (string)=> {
    console.log(string,'拦截');
    // console.log();
    if(!this.state.infinite) return false;
    this.props.dispatch({
      type:'CHANGE_SEARCH_STRING',
      datas:string
    });
    this.setState({
      infinite:false,
      is_loading:true
    });
    ajaxMethod('wpPosts/getWpPostsList',{
      searchName:string,
      pageNo:this.state.pageNo
    }).then((res) => {
      this.props.dispatch({
        type:'LOAD_SEARCH',
        datas:res.datas
      });
      this.setState({
        is_loading:false
      });
      setTimeout(()=>{
        if(this.props.search.datas.length>= res.totalSize){
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

  _resetSearch = () => {
    this.setState({
      infinite:true,
      pageNo:1
    });
    this.props.dispatch({
      type:'RESET_SEARCH'
    })
  }
  _searchHandle(){
    this.props.navigator.push({
      component:Search,
      name:'search',
      loadSearch:this._loadSearch,
      title:()=> (<SearchHeader searchAction={this._searchAction} navigator={this.props.navigator}/>)
    });
  }
  render(){
    return(
      <View style={styles.content}>
        <NavigatorHeader {...this.props}
         title= {()=> <SearchHeader searchAction={this._searchAction} navigator={this.props.navigator}/>}/>
        <List loadHandle={this._loadSearch} dataSource = {this.props.search.datas} {...this.props}/>
        <Loading isVisible={this.state.is_loading}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content:{
    backgroundColor:'#fff',
    flex:1
  }
})

function select(state){
  return {
    search:state.search
  }
}
export default connect(select)(Search);
