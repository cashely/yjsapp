import React,{Component} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
  StyleSheet
} from 'react-native';
export default class Adv extends Component {
  constructor(props){
    super(props);
    this.state = {
      sec:5
    }
  }
  componentDidMount(){
    let t = setInterval(()=>{
      if(this.state.sec > 1){
        this.setState({
          sec:this.state.sec-1
        })
      }else{

        clearInterval(t);
        this.props.hideModal();
      }
    },1000);

  }
  render(){
    return(
      <Modal
        visible={this.props.isVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={this.props.hideModal}
      >
        <View style={styles.content}>
          <TouchableOpacity style={styles.button} onPress={this.props.hideModal}>
            <Text style={styles.buttonText}>
              {this.state.sec}跳过
            </Text>
          </TouchableOpacity>
          <Image style={styles.img} source={{uri:this.props.uri}}/>
        </View>
      </Modal>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1
  },
  img:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
  },
  button:{
    position:'absolute',
    right:10,
    top:20,
    zIndex:2,
    borderRadius:20,
    width:40,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  buttonText:{
    color:'#fff',
    fontSize:10
  }
})
