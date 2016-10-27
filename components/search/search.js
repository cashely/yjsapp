import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import List from '../index/index/list';
class Search extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.content}>
        <List {...this.props} dataSource={this.props.search.datas}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content:{
    backgroundColor:'#fff',
    paddingTop:64,
    flex:1
  }
})

function select(state){
  return {
    search:state.search
  }
}
export default connect(select)(Search);
