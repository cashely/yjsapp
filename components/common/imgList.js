import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ListView,
  TouchableHighlight
} from 'react-native';
import LinkButton from './linkButton';
export default class ImgList extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2)=> r1 !== r2
    });
    this.state = {
      datas : ds,
      isFirst:true
    }
  }
  //需要加入此方法阻止事件第一次加载
  _loadHandle = (a) => {
    // console.log(a);
    if(this.state.isFirst){
      this.setState({
        isFirst:false
      });
      return false;
    }else{
      this.props.loadHandle();
    }

  }
  _renderRow(ele){
    return(
      <LinkButton navigator={this.props.navigator} ele={ele}/>
    )
  }
  render(){
    return(
        <ListView
          initialListSize={1}
          dataSource={this.state.datas.cloneWithRows(this.props.dataSource)}
          renderRow={(ele)=>this._renderRow(ele)}
          enableEmptySections={true}
          onEndReached={
              this._loadHandle
          }
          onEndReachedThreshold={0}
        />
    )
  }
}
