import React,{
  Component
} from 'react';
import
import JPushModule from 'jpush-react-native';
export default class Jpush extends Component {
  componentDidMount(){
    JPushModule.getInfo((map)=>{
      console.log(map);
    })
  }
  render(){
    return null;
  }
}
