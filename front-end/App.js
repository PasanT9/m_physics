import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Block, Text } from 'expo-ui-kit';

import Drawer from './src/components/Drawer';

export default class Home extends React.Component {

  state = {
    student_id: ''
  }

   render() {
      
      return (
        <NavigationContainer>
          <Drawer />
          {}
        </NavigationContainer>
    );
  } 
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  }
 });