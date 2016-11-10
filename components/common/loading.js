import React,{Component} from 'react';
import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
export default class Loading extends Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible:true
    }
  }
  _hideModal(){
    this.setState({
      isVisible:false
    });
  }
  render(){
    return(
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.props.isVisible}
          onRequestClose={this._hideModal.bind(this)}
        >
          <Main hideModal={this._hideModal.bind(this)}/>
        </Modal>
    )
  }
}

class Main extends Component {
  render(){
    return(
      <View style={styles.button}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator
              animating={true}
              size="small"
              color="#fff"
            />
          </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center'
  }
})
