import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux';



import Home from './index/home.js';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:1
    };
    

    // console.dir(this.props);
  }
  componentWillMount(){
  }
  

  _navPress(id){
    this.setState({
      active:id
    });
  }
  render() {
    return (
      <View style={styles.content}>
        <View style={styles.navBar}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={this._navPress.bind(this,1)}>
                  <Text style={this.state.active == 1 ? styles.navActive : styles.navTitle}>首页要闻</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._navPress.bind(this,2)}>
                  <Text style={this.state.active == 2 ? styles.navActive : styles.navTitle}>通知公告</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._navPress.bind(this,3)}>
                  <Text style={this.state.active == 3 ? styles.navActive : styles.navTitle}>新闻资讯</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._navPress.bind(this,4)}>
                  <Text style={this.state.active == 4 ? styles.navActive : styles.navTitle}>中标公告</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._navPress.bind(this,5)}>
                  <Text style={this.state.active == 5 ? styles.navActive : styles.navTitle}>政策法规</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._navPress.bind(this,6)}>
                  <Text style={this.state.active == 6 ? styles.navActive : styles.navTitle}>非诚信名单</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._navPress.bind(this,7)}>
                  <Text style={this.state.active == 7 ? styles.navActive : styles.navTitle}>培训通知</Text>
                </TouchableOpacity>
              </ScrollView>
        </View>
        <View style={styles.main}>
          <ScrollView>
            <Home {...this.props}/>
          </ScrollView>
        </View>
      </View>
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
    flex:1
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