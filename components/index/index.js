//首页
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux';

import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';


import Home from './index/home.js';
import Notice from '../notice/notice';

class Main extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.content}>
        <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}>
          <Home {...this.props} tabLabel="首页要闻"/>
          <Notice {...this.props} tabLabel="通知公告"/>
          <Notice {...this.props} tabLabel="通知公告"/>
          <Notice {...this.props} tabLabel="通知公告"/>
          <Notice {...this.props} tabLabel="通知公告"/>
          <Notice {...this.props} tabLabel="通知公告"/>
          <Notice {...this.props} tabLabel="通知公告"/>
          <Notice {...this.props} tabLabel="通知公告"/>
        </ScrollableTabView>
      </View>
    )
  }
}

class ScrollTabTitle extends Component {
  render(){
    console.log(this.props);
    return(
      <View style={styles.navBar}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                this.props.tabs.map((ele,index)=>{
                  return (
                    <TouchableOpacity key={`scrollTabView${index}`} onPress={()=>{this.props.goToPage(index)}}>
                      <Text style={this.props.activeTab == index ? styles.navActive : styles.navTitle}>{ele}</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
      </View>
    )
  }
}
class Index extends Component {
  constructor(props) {
    super(props);



    // console.dir(this.props);
  }
  componentWillMount(){
  }
  componentDidMount() {
  }


  render() {
    return (

        <Main {...this.props}/>
    );
  }
}

const styles = StyleSheet.create({
  content:{
    paddingTop:64,
    flex:1
  },
  navBar:{
    backgroundColor:'#E8E8E8',
    height:36
  },
  navTitle:{
    padding:10
  },
  navActive:{
    color:'#4078c0',
    padding:10,
    fontWeight:'bold'
  },
  searchBar:{
    flex:1,
    padding:5,
    justifyContent:'center',
    height:40,
    flexDirection:'row',
  },
  searchInput:{
    flex:1,
    borderRadius:3,
    backgroundColor:'#e8e8e8'
  },
  searchButton:{
    width:40,
    justifyContent:'center'
  },
  main:{
    flex:1,
    overflow:'hidden'
  },
  image:{
    flex:1
  },
  imagesBar:{

  },
  mainScroll:{
    flex:1
  }
});

function select(state){
  return{
    index:state.index
  }
}
export default connect(select)(Index);
