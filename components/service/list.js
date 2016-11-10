import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class List extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1!==r2
    });
    this.state= {
      datas:ds,
      isFirst:true
    }
  }
  _renderRow(ele){
      return (<View style={styles.q}>
                <Text>
                  <Text>问：{ele.postTitle}</Text>
                  <Text>{ele.postDate}</Text>
                </Text>
                <Text>
                  <Text>答：{ele.postContent}</Text>
                </Text>
              </View>)
  }
  //需要加入此方法阻止事件第一次加载
  _loadHandle = (a,b) => {
    // console.log(a,b);
    if(this.state.isFirst){
      this.setState({
        isFirst:false
      });
      return false;
    }else{
      this.props.loadHandle();
    }

  }
  render(){
    return(
      <ListView
        initialListSize={1}
        renderRow={this._renderRow.bind(this)}
        dataSource={this.state.datas.cloneWithRows(this.props.dataSource)}
        enableEmptySections={true}
        onEndReached={
            this._loadHandle
        }
        onEndReachedThreshold={0}
      />
    )
  }
}
const styles = StyleSheet.create({
  a:{
    backgroundColor:'#f1f1f1',
    padding:10,
    marginLeft:10,
    borderBottomWidth:1,
    borderBottomColor:'#d1d1d1'
  },
  q:{
    padding:10
  },

})
