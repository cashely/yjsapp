import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Slider from './slider';
import Title from './title';
import List from './list';
export default class Home extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
      	datas:[]
	  };
	}

	render(){
		return(
			<View>
				<Slider/>
	            <Title title="通知公告"/>
	            <List dataSource={this.state.datas}/>
	            <Title title="政策法规"/>
	            <List dataSource={this.state.datas}/>
			</View>
		)
	}

	componentDidMount(){
	    const data = [{
	      type:'药品交易',
	      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
	      isNew:true,
	      time:'2016-08-01'
	    },{
	      type:'医用耗材',
	      title:'一期医用耗材生产企业报名系统操作培训的通知',
	      isNew:true,
	      time:'2016-08-02'
	    },{
	      type:'药品交易',
	      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
	      isNew:false,
	      time:'2016-08-03'
	    },{
	      type:'药品交易',
	      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
	      isNew:false,
	      time:'2016-08-04'
	    },{
	      type:'药品交易',
	      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
	      isNew:false,
	      time:'2016-08-05'
	    },{
	      type:'药品交易',
	      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
	      isNew:false,
	      time:'2016-08-06'
	    },{
	      type:'药品交易',
	      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
	      isNew:false,
	      time:'2016-08-07'
	    },{
	      type:'药品交易',
	      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
	      isNew:false,
	      time:'2016-08-08'
	    },{
	      type:'药品交易',
	      title:'01607基本药物及非基本药物医保目录交易品种竞价结果的通知',
	      isNew:false,
	      time:'2016-08-09'
	    }];
	    this.setState({
	      datas:this.state.datas.concat(data)
	    })
	  }
}