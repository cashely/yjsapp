import {
  Alert
} from 'react-native';
import {httpAddress} from '../config/index';

export const ajaxMethod = (url,params={})=> {
  // console.log(params);
  return fetch(httpAddress + url +'?'+ JSON.stringify(params),{
    method:'POST',
    body:JSON.stringify(params)
  }).then((res)=>{
    // console.log(res);
    return res.json()
  }).then(res =>{
    // console.log(res);
    if(res.state == 1){
      return new Promise((r) => r(res));
    }else{
      Alert.alert('提示',res.message);
      return new Promise(r => r([]));
    }
  })
}
