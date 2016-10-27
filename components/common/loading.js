import React,{Component} from 'react';
import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
export default class Loading extends Component {
  constructor(props){
    super(props);
  }
  render(){
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.isVisible}
      >
        <Main/>
      </Modal>
    <View>
  }
}

class Main extends Component {
  render(){
    return(
      <View style={styles.content}>
        <ActivityIndicator
          animating={true}
          size="large"
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
