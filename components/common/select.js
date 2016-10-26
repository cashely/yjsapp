import React,{Component} from 'react';
import {
  Modal,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Picker,
  StyleSheet
} from 'react-native';
export default class Select extends Component {
  constructor(props){
    super(props);
    this.state={
      value:this.props.value
    }
  }
  _sureButton(){
    this.props.sureButton(this.state.value);
  }
  _cancelButton(){
    this.props.cancelButton();
  }
  _onChangeValue(value){
    this.setState({
      value:value
    })
  }
  render(){
    return(
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={this.props.isVisible}
        style={styles.modal}
      >
        <View style={styles.bg}>
          <View style={styles.content}>
            <View style={styles.titleBar}>
              <TouchableOpacity style={styles.button} onPress={this._cancelButton.bind(this)}>
                <Text style={styles.buttonText}>取消</Text>
              </TouchableOpacity>
              <Text style={styles.title}>请选择</Text>
              <TouchableOpacity style={styles.button} onPress={this._sureButton.bind(this)}>
                <Text style={styles.buttonText}>确定</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.picker}>
              <Picker
               onValueChange={this._onChangeValue.bind(this)}
               selectedValue={this.state.value}
              >
                <Picker.Item value="1" label="one"/>
                <Picker.Item value="2" label="two"/>
              </Picker>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles  = StyleSheet.create({
  bg:{
    backgroundColor:'rgba(0,0,0,0.5)',
    flex:1
  },
  content:{
    position:'absolute',
    bottom:0,
    flex:1,
    height:200,
    width:Dimensions.get('window').width,
    backgroundColor:'#fff'
  },
  titleBar:{
    height:40,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#e1e1e1'
  },
  button:{
    width:40,
    marginHorizontal:10
  },
  buttonText:{
    color:'#4078c0'
  },
  title:{
    textAlign:'center',
    flex:1,
    fontWeight:'bold'
  },
  picker:{
    flex:1,
    overflow:'hidden',
    justifyContent:'center'
  }
});
