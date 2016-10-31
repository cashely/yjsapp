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
      datas:ds
    }
  }
  _renderRow(ele){
    if(ele.type === 'Q'){
      return (<View style={styles.q}>
                <Text>
                  <Text>问：{ele.content}</Text>
                  <Text>{ele.time}</Text>
                </Text>
              </View>)
    }else{
      return (<View style={styles.a}>
                <Text>
                  <Text>答：{ele.content}</Text>
                </Text>
              </View>)
    }
  }
  render(){
    return(
      <ListView
        renderRow={this._renderRow.bind(this)}
        dataSource={this.state.datas.cloneWithRows(this.props.dataSource)}
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
