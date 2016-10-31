import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class FeedBack extends Component {
  render(){
    return(
      <View style={styles.content}>

        <View style={styles.inputContent}>
          <View style={styles.inputWrap}>
            <Icon name="edit" size={15} color="#d1d1d1" style={styles.inputIcon}/>
            <TextInput
              style={styles.inputText}
              autoFocus={true}
              placeholder="请输入搜索的关键词"
              placeholderTextColor="#e1e1e1"
              keyboardType="web-search"
              clearButtonMode="always"
              ref= {(ref)=> this._searchInput = ref}
              onChangeText={
                (text)=>{
                  console.log(1);
                }
              }
              onSubmitEditing={()=>{
                console.log(2);
              }}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              提交
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    paddingTop:64,
    backgroundColor:'#fff'
  },
  main:{
    flex:1,
  },
  inputContent:{
    paddingLeft:10,
    paddingVertical:5,
    backgroundColor:'#f1f1f1',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  inputWrap:{
    flex:1,
    paddingHorizontal:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:3,
    backgroundColor:'#fff'
  },
  inputIcon:{
    width:20,
    justifyContent:'center',
    textAlign:'center'
  },
  inputText:{
    flex:1,
    height:30
  },
  button:{
    padding:10,
    overflow:'hidden'
  },
  buttonText:{
    color:'#4078c0'
  }
})
