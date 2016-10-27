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
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Select extends Component {
  constructor(props){
    super(props);
    this.state={
      value:this.props.value,
      isVisible:false
    }
  }
  _sureButton(){
    this._hideModal();
    this.props.sureButton(this.state.value);

  }
  _cancelButton(){
    this._hideModal();
  }
  _onChangeValue(value,index){
    console.log(index);
    this.setState({
      value:index
    })
  }
  _hideModal(){
    this.setState({
      isVisible:false
    })
  }
  render(){
    return(
      <View>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.isVisible}
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
                  {
                    this.props.menuItems.map((ele)=>{
                      return <Picker.Item key={`${ele.value}${ele.value}`} value={ele.value} label={ele.text}/>
                    })
                  }
                </Picker>
              </View>
            </View>
          </View>
        </Modal>
        <View>
          <TouchableOpacity style={styles.selectContent} onPress={()=>{this.setState({isVisible:true})}}>
            <Icon name="filter" size={20} style={styles.selectIcon}/>
            <Text style={styles.selectText}>{this.props.menuItems[this.props.value].text}</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  },
  selectContent:{
    marginRight:5,
    flexDirection:'row',
    alignItems:'center'
  },
  selectIcon:{
    width:20,
    color:'#666'
  },
  selectText:{
    color:'#666',
    flex:1,
    textAlign:'left'
  }
});
