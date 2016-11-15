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
      return (<View style={styles.line}>
                <View style={{borderBottomWidth:1,borderBottomColor:'#d1d1d1'}}>
                  <Text style={styles.q}>
                    <Text>问：{ele.postTitle}</Text>
                    <Text style={styles.time}>{ele.postDate}</Text>
                  </Text>
                </View>
                <Text style={styles.a}>
                  <Text>{ele.postContent}</Text>
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
  line:{
    paddingLeft:10,
    borderBottomWidth:1,
    borderBottomColor:'#d1d1d1'
  },
  q:{
    color:'#333',
    fontWeight:'bold',
    paddingVertical:10
  },
  a:{
    color:'#696969',
    paddingVertical:10,

  },
  time:{
    fontWeight:'normal',
    fontSize:10,
    color:'#666'
  }

})
