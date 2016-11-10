import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class SearchHeader extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.content}>
        <View style={[styles.inputContent,{backgroundColor:this.props.backgroundColor}]}>
          <Icon style={[styles.icon,{color:this.props.iconColor}]} name="search" size={14}/>
          <TextInput
            autoFocus={false}
            underlineColorAndroid="transparent"
            placeholder="请输入搜索的关键词"
            placeholderTextColor={this.props.iconColor ? this.props.iconColor : "#e1e1e1"}
            keyboardType="web-search"
            clearButtonMode="always"
            style={styles.input}
            ref={(ref)=> this.searchInput = ref}
            onSubmitEditing={
              (event)=>{
                this.props.searchHandle(event.nativeEvent.text);
              }
            }
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    alignItems:'center',
    flexDirection:'row'
  },
  icon:{
    width:30,
    textAlign:'center',
    color:'#e1e1e1'
  },
  inputContent:{
    flex:1,
    backgroundColor:'#3869A7',
    borderRadius:3,
    padding:0,
    flexDirection:'row',
    alignItems:'center'
  },
  input:{
    flex:1,
    padding:0,
    height:30,
    justifyContent:'center',
    color:'#000',
    fontSize:14
  },
  button:{
    paddingHorizontal:10
  },
  buttonText:{
    textAlign:'center',
    color:'#fff'
  }
})
