import React from 'react';
import {Dimensions, SafeAreaView, View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { useDeviceOrientation } from "@react-native-community/hooks";

import { Image, ScrollView, Text } from 'react-native';

import Header from './Header';

export default class Home extends React.Component {

    state = {
        uri: '',
    }

   componentDidMount(){

    this.setState({ uri: "http://192.168.43.100:8081/media/watch/" +this.props.navigation.state.params.video_id}, function() {
      console.log("url updated to "+ this.state.uri );
    });
   }

   render() {    
      const { uri } = this.state;
      
      
      return (
        <SafeAreaView style={styles.background}>
         <View>
            <Video
               source={{ uri: "http://192.168.43.100:8081/media/watch/5ff1b57d032d703b0803f6eb"}}
               rate={1.0}
               volume={1.0}
               useNativeControls
               isMuted={false}
               resizeMode="cover"
               shouldPlay
               isLooping
               controls
               resizeMode="contain"
               style={{ width: "100%", height: "100%", backgroundColor: "black"}}
               />

        </View>
        </SafeAreaView>
        
    );
  }
}

const styles = StyleSheet.create({

  background: {
    //marginTop: Platform.OS === 'android' ? 25 : 0,
  }
 });
