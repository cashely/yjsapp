import React from 'react';
import{
  Dimensions,
  PixelRatio
} from 'react-native';
const _WIDTH = 375;
const _HEIGHT = 667;
export const elementScale = (size) => {
  var {width} = Dimensions.get('window');
  return size*width/_WIDTH;
}
export const elementHight = (size) => {
  var {height} = Dimensions.get('window');
  return size*height/_HEIGHT;
}

export const pixelRatio = (width) => {
  var pr = PixelRatio.get();
  return width/pr;
}
