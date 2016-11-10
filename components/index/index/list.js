//首页-列表
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import LinkButton from '../../common/linkButton';
export default class List extends Component{
	constructor(props) {
	  super(props);
	}

	render(){
		return(
			<View>
        {
          Array.from(this.props.dataSource,(ele)=>{
            return <LinkButton navigator={this.props.navigator} key={`'linkButton${ele.id}'`} ele={ele}/>
          })
        }
      </View>
		)
	}
}
