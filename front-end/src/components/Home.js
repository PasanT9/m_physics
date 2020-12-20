import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Image, Text } from 'react-native';

export default class Home extends React.Component {


   render() {
      
      return (
          <View style = {styles.view}>
            <Image style = {styles.thumbnail} source={logo} />
            <Image style = {styles.thumbnail} source={logo} />
            <Image style = {styles.thumbnail} source={logo} />
            <Image style = {styles.thumbnail} source={logo} />
          </View>
        
    );
  }
}

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

var styles = StyleSheet.create({

  view: {
    //alignContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    justifyContent: 'center'
   //position: "absolute"
  },
  thumbnail: {
    margin: 10,
    width: '30%',
    height: '30%',
  },
 });