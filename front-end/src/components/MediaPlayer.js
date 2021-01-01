import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Video } from 'expo-av';

import { Image, ScrollView, Text } from 'react-native';

export default class Home extends React.Component {

    state = {
        uri: '',
    }

   componentDidMount(){

    this.setState({ uri: "http://localhost:8081/media/watch/" +this.props.navigation.state.params.video_id}, function() {
      console.log("url updated to "+ this.state.uri );
    });
   }


   render() {
      const { width } = Dimensions.get('window');     
      const { uri } = this.state;
      
      return (
         <View >
            <Video
               source={{ uri: uri}}
               rate={1.0}
               volume={1.0}
               isMuted={false}
               resizeMode="cover"
               shouldPlay
               useNativeControls
               isLooping
               resizeMode="contain"
               style={{ width: "100%", height: "100%", marginTop:20 }}
               />

        </View>
        
    );
  }
}