import React,{Component} from 'react';
import {
  View,
  TouchableHighlight,
  Image,
  Text,
  StyleSheet
} from 'react-native';
import NavigatorTitle from '../common/navigatorTitle';
import Single from '../single/single';
export default class LinkButton extends Component {
  _goBack(){
    this.props.navigator.pop();
  }
  _linkHandle(title,id){
    this.props.navigator.push({
      component:Single,
      name:'single',
      id:id,
      title:()=> (<NavigatorTitle goBack={this._goBack.bind(this)} isShare={true} isCollected={true} id={id} navigator={this.props.navigator} title={title}/>)
    })
  }
  render(){
    return(
      <View style={styles.content}>
        <TouchableHighlight style={styles.button} onPress={this._linkHandle.bind(this,this.props.ele.postTitle,this.props.ele.id)} underlayColor="#f5f5f5">
          <View style={{flex:1}}>
            {
              this.props.ele.imgUrl ? <View style={styles.left}>
                <Image source={{uri:this.props.ele.mainImg}} style={styles.image}/>
              </View> : null
            }
            <View style={styles.right}>
              <Text style={styles.text}>
                {
                  this.props.ele.termName ? <Text style={styles.tag}>[{this.props.ele.termName}]</Text> : null
                }
                <Text>{this.props.ele.postTitle}</Text>
              </Text>
              <Text style={styles.time}>{this.props.ele.postDate}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  content:{
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'#d1d1d1'
  },
  button:{
    flex:1,
    padding:10
  },
  left:{
    width:80,
    height:80,
    marginRight:10
  },
  right:{
    flex:1
  },
  text:{
    flex:1,
    color:'#696969',
    lineHeight:18,
    justifyContent:'flex-start'
  },
  tag:{
    color:'red',
    marginRight:10
  },
  time:{
    textAlign:'right',
    color:'#666',
    fontSize:12
  },
  image:{
    width:80,
    height:80
  }
})
