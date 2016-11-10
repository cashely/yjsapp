/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  AsyncStorage,
  Platform
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer/index';

import Router from './components/router';
var store = createStore(reducer);



class Index extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <Provider store={store}>
          <Router/>
        </Provider>
    )
  }
}

AppRegistry.registerComponent('yjsapp', () => Index);
