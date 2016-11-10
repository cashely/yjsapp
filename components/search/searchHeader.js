import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import NavigatorBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class SearchHeader extends Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }
    this.state={
      infinite:true,
      pageNo:1
    }

  }
  _goBack(){
    this.props.navigator.pop();
  }

  render(){
    return(
      <View style={styles.content}>
        <View style={styles.inputContent}>
          <Icon style={styles.icon} name="search" size={14}/>
          <TextInput
            autoFocus={true}
            underlineColorAndroid="transparent"
            placeholder="请输入搜索的关键词"
            placeholderTextColor="#e1e1e1"
            keyboardType="web-search"
            clearButtonMode="always"
            style={styles.input}
            ref= {(ref)=> this._searchInput = ref}
            onChangeText={
              (text)=>{
                this.setState({
                  value:text
                })
              }
            }
            onSubmitEditing={(event,text)=>{
              this.props.searchAction(event.nativeEvent.text);
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this._goBack.bind(this)}>
          <Text style={styles.buttonText}>取消</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    paddingLeft:10,
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
    color:'#fff',
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
