import React from 'react';
import {Dimensions, View } from 'react-native';
import { Video } from 'expo-av';

import { Image, ScrollView, Text } from 'react-native';

export default class Home extends React.Component {

    state = {
        uri: '',
    }

   componentDidMount(){

    this.setState({ uri: "http://192.168.1.102:8081/media/watch/" +this.props.navigation.state.params.video_id}, function() {
      console.log("url updated to "+ this.state.uri );
    });
   }


   render() {
      const { width } = Dimensions.get('window');     
      const { uri } = this.state;
      
      return (
        <View>
         <View >
            <Video
               source={{ uri: "http://192.168.1.102:8081/media/watch/5ff1b57d032d703b0803f6eb"}}
               rate={1.0}
               volume={1.0}
               isMuted={false}
               resizeMode="cover"
               shouldPlay
               isLooping
               controls
               resizeMode="contain"
               style={{ width: "100%", height: "100%", marginTop:20 }}
               />

        </View>
        </View>
        
    );
  }
}
