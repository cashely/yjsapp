import {
  Alert
} from 'react-native';
import {httpAddress} from '../config/index';

export const ajaxMethod = (url,params={})=> {
  console.log(params);
  return fetch(httpAddress + url,{
    method:'POST',
    body:encodeURIComponent(encodeURIComponent(JSON.stringify(params)))
  }).then((res)=>{
    return res.json()
  }).then(res =>{
    console.log(res);
    if(res.state == 1){
      return new Promise((r) => r(res));
    }else{
      Alert.alert('提示',res.message);
      return new Promise(r => r([]));
    }
  })
}
