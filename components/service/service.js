import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import MainSearch from '../common/mainSearch';
import Select from '../common/select';
import List from './list';
export default class Service extends Component {
  constructor(props){
    super(props);
    this.state={
      value:0
    }
  }
  _sureButton(value){
    this.setState({
      value:value
    })
  }
  render(){
    const menuItems = [
      {
        value:0,
        text:'全部'
      },
      {
        value:1,
        text:'系统问题'
      },{
        value:2,
        text:'业务问题(医院)'
      },
      {
        value:3,
        text:'业务问题(企业)'
      },
      {
        value:4,
        text:'结算问题'
      },
      {
        value:5,
        text:'其他问题'
      }
    ];
    const datas=[
      {
        type:'Q',
        content:'说明书原件含括很多型号信息，若报名仅报其中一个型号规格，能否抽取该型号说明书，仅提交该部份的信息？',
        time:' 2015/12/30'
      },
      {
        type:'A',
        content:'可以。'
      },
      {
        type:'Q',
        content:'生产企业，既是国产企业，又是进口总代，该如何报名？报名产品总表是否区分国产产品和进口产品？',
        time:' 2015/12/30'
      },
      {
        type:'A',
        content:'如果企业既是生产又是代理，以同一主体报名，并递交所对应的资质材料及产品资料。若同一目录类别产品总表可汇总一起，无需区分国产进口。'
      },
      {
        type:'Q',
        content:'耗材报名产品总表上产品名称应如何填写，能否和注册产品名称一致，或以注册批件附页上的描述填写？',
        time:' 2015/12/30'
      },
      {
        type:'A',
        content:'可以，产品名称企业自定，可以根据产品的说明书或质量标准等信息填写。'
      },
      {
        type:'Q',
        content:'耗材产品报名系统要求提交清晰的产品照片（包括产品实体与包装的正面、反面、侧面等），能否不以实体拍摄的图片，以宣传产品的图片上传？',
        time:' 2015/12/30'
      },
      {
        type:'A',
        content:'企业自定，所提交图片能清晰看出产品信息即可。同时企业资质扫描件请留存，后续需在系统提交，保持信息的一致性。企业自定，所提交图片能清晰看出产品信息即可。同时企业资质扫描件请留存，后续需在系统提交，保持信息的一致性。'
      },
      {
        type:'Q',
        content:'耗材产品报名是按包装规格，若有小、中、大规格，大规格有上百件，或上千件。是否均要求报名？',
        time:' 2015/12/30'
      },
      {
        type:'A',
        content:'产品报名按照产品规格计，与包装规格无关。'
      }
    ];
    return(
      <View style={styles.content}>
        <View style={styles.mainBar}>
          <Select value={menuItems[this.state.value].value} menuItems={menuItems} sureButton={this._sureButton.bind(this)}/>
          <MainSearch backgroundColor="#fff" iconColor="#666" buttonColor="#4078c0"/>
        </View>
        <List dataSource={datas}/>
      </View>
    )
  }
}
const styles  = StyleSheet.create({
  content:{
    flex:1,
    paddingTop:64,
    backgroundColor:'#fff'
  },
  mainBar:{
    height:44,
    borderBottomWidth:1,
    backgroundColor:'#e1e1e1',
    borderBottomColor:'#d1d1d1',
    paddingHorizontal:10,
    flexDirection:'row',
    alignItems:'center'
  }
})
