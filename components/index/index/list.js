//首页-列表
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import Single from '../../single/single';

export default class List extends Component{
	constructor(props) {
	  super(props);

	  const ds = new ListView.DataSource({
	      rowHasChanged:(r1,r2)=> r1!==r2
	    });
	  this.state={
	  	dataSource:ds.cloneWithRows(ds)
	  }
	}
  _linkHandle(title){
    this.props.navigator.push({
      component:Single,
      name:'single',
      title:title
    })
  }

	render(){
		return(
			<ListView
        style={{paddingLeft:10,paddingRight:10}}
        dataSource={this.state.dataSource.cloneWithRows(this.props.dataSource)}
        enableEmptySections={true}
        onEndReachedThreshold={10}
        onEndReached={
          ()=>{
            console.log('end');
          }
        }
        renderRow={
          (ele)=>{
            return <View style={{borderBottomWidth:1,borderBottomColor:'#e1e1e1',paddingBottom:10,paddingTop:10}}>
              <Text onPress={ this._linkHandle.bind(this,ele.title) }>
                <Text style={{color:'red'}}>[{ele.type}]</Text><Text numberOfLines={1}>{ele.title}</Text>{
                  ele.isNew ? <Text style={{color:'red'}}>NEW</Text> : false
                }
              </Text>
              <View>
                <Text style={{textAlign:'right',color:'#666',fontSize:12}}>{ele.time}</Text>
              </View>

            </View>
          }
        }
      />
		)
	}
}
