import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class ScrollTabBar extends Component {
  constructor(props){
    super(props);
    this.tabIcons=[];
    console.log(this.props.tabs);
  }
  render(){
    return(
      <View style={{borderBottomColor:'#d1d1d1',borderBottomWidth:1}}>
        <ScrollView style={[this.props.style,{marginVertical:10}]} horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.props.tabs.map((tab, i) => {
            return(
              <TouchableOpacity key={tab.icon+i} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                <View style={[styles.icon,{backgroundColor:this.props.activeTab === i ? '#4078c0' : 'rgb(255,255,255)'}]}>
                  <Icon
                    name={tab.icon}
                    size={30}
                    color={this.props.activeTab === i ? 'rgb(255,255,255)' : tab.color}
                    ref={(icon) => { this.tabIcons[i] = icon; }}
                  />
                </View>
                <Text style={styles.iconText}>{tab.name}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:20,
    paddingVertical:10
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  icon:{
    flex:1,
    borderRadius:20,
    height:40,
    width:40,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  iconText:{
    fontSize:10,
    lineHeight:15
  }
});
