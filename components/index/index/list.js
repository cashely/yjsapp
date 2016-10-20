import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
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
	render(){
		return(
			<ListView
              style={{paddingLeft:10,paddingRight:10}}
              dataSource={this.state.dataSource.cloneWithRows(this.props.dataSource)}
              enableEmptySections={true}
              renderRow={
                (ele)=>{
                  return <View style={{borderBottomWidth:1,borderBottomColor:'#e1e1e1',paddingBottom:10,paddingTop:10}}>
                    <Text>
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