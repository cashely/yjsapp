import React,{Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from './share';
export default class NavigatorTitle extends Component {
  constructor(props){
    super(props);
    this.state={
      isVisiable:false,
      isCollected:false
    }
  }
  _goBack(){
    this.props.goBack();
  }
  _showModal(){
    this.setState({isVisiable:true});
  }
  _hideModal(){
    this.setState({isVisiable:false});
  }
  _collectHandle(){
    this.setState({
      isCollected:!this.state.isCollected
    })
  }
  render(){
    return(
      <View style={styles.content}>
        <TouchableOpacity onPress={this._goBack.bind(this)} style={styles.buttonMenu}>
          <Icon style={styles.buttonIcon} name="angle-left" size={30}/>
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.titleText}>
          {this.props.title}
        </Text>
        <View style={styles.right}>
          {
            this.props.isShare ? <ShareButton pressHandle={this._showModal.bind(this)}/> : null
          }
          {
            this.props.isCollected ? <CollectButton isCollected={this.state.isCollected} pressHandle={this._collectHandle.bind(this)}/> : null
          }
        </View>
        <Share hideHandle={this._hideModal.bind(this)} isVisiable={this.state.isVisiable}/>
      </View>
    )
  }
}

class CollectButton extends Component {
  render(){
    return(
      <TouchableOpacity style={styles.buttonMenu} onPress={this.props.pressHandle}>
        <Icon name={this.props.isCollected ? "heart" : "heart-o"} size={15} color="#fff"/>
      </TouchableOpacity>
    )
  }
}
class ShareButton extends Component {
  render(){
    return(
      <TouchableOpacity onPress={this.props.pressHandle} style={styles.buttonMenu}>
        <Icon name="share" size={15} color="#fff"/>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'

  },
  buttonMenu:{
    marginHorizontal:5,
    padding:5
  },
  buttonIcon:{
    color:'#fff'
  },
  titleText:{
    flex:1,
    fontSize:16,
    flexWrap:'nowrap',
    color:'#fff',
    overflow:'hidden'
  },
  right:{
    flexDirection:'row',
    alignItems:'center'
  }
})
