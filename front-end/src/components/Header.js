import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather';

export default class Header extends React.Component {

   render() {

    const { dark } = this.props;
      
      return (
        
        <View style = {dark? styles.headerContainerDark: styles.headerContainerLight} >
            <Text style = {dark? styles.headerTextDark: styles.headerTextLight}>M_PHYSICS</Text>
            <TouchableOpacity onPress={() => this.continue('logOut')} style={styles.icon}>
              <Animatable.View
                  animation='bounceIn'
                >
                  <Feather 
                    name="log-out"
                    color= {dark? "white": "#05375a"}
                    size = {20}
                  /> 
              </Animatable.View>
            </TouchableOpacity>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({

    headerContainerDark: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        height: 50,
        width: "100%",
        backgroundColor: '#009387',
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    headerTextDark: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold'
    },
    headerContainerLight: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 3,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      height: 50,
      width: "100%",
      backgroundColor: 'white',
      position: 'absolute',
      top: 0,
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      
  },
  headerTextLight: {
      color: "#05375a",
      fontSize: 18,
      fontWeight: 'bold'
  },
    icon: {
        position: 'absolute',
        right: 10
    }
    
   });
