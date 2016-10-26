import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ListView
} from 'react-native';
export default class ImgList extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2)=> r1 !== r2
    });
    this.state = {
      datas : ds.cloneWithRows([])
    }
  }

  _renderRow(ele){
    console.log(ele.imgUrl);
    return(
      <View style={styles.content}>
        <View style={styles.left}>
          <Image source={{uri:ele.imgUrl}} style={styles.image}/>
        </View>
        <View style={styles.right}>
          <Text style={styles.text}>
            <Text style={styles.tag}>[{ele.type}]</Text>
            <Text>{ele.title}</Text>
          </Text>
          <Text style={styles.time}>{ele.time}</Text>
        </View>
      </View>
    )
  }
  render(){
    return(
        <ListView
          dataSource={this.state.datas.cloneWithRows(this.props.dataSource)}
          renderRow={(ele)=>this._renderRow(ele)}
        />
    )
  }
}

const styles = StyleSheet.create({
  content:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    borderBottomWidth:1,
    borderColor:'#d1d1d1'
  },
  left:{
    width:80,
    height:80
  },
  right:{
    flex:1,
    marginLeft:10
  },
  text:{
    flex:1,
    justifyContent:'flex-start'
  },
  tag:{
    color:'red'
  },
  time:{
    textAlign:'right'
  },
  image:{
    width:80,
    height:80
  }
})
