//首页-主页
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Slider from './slider';
import Title from './title';
import List from './list';
import News from './news';
export default class Home extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
      	datas:[]
	  };
	}

	render(){
		return(
  			<View style={styles.content}>
          <ScrollView>
  				    <Slider navigator={this.props.navigator} dataSource={this.props.index.slider}/>
	            <Title changeTabHandle={() => {this.props.changeTabHandle(1)}} title="通知公告"/>
	            <List {...this.props} dataSource={this.props.index.notice}/>
              <News {...this.props} changeTabHandle={() => {this.props.changeTabHandle(2)}} dataSource={this.props.index.news} title="新闻资讯"/>
	            <Title changeTabHandle={() => {this.props.changeTabHandle(4)}} title="政策法规"/>
	            <List {...this.props} dataSource={this.props.index.policy}/>
          </ScrollView>
  			</View>
		)
	}
}
const styles = StyleSheet.create({
  content:{
    flex:1
  }
})
