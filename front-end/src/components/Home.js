import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { listMedia } from "./Functions";

export default class Home extends React.Component {

    state = {
        student_id: '',
        mute: false,
        shouldPlay: true,
    }

    getMediaList = () => {

      let {student_id} = this.state;

      listMedia(student_id).then(res => {
        console.log(res.media);
      });

   }

   componentDidMount(){

    this.setState({ student_id: this.props.navigation.state.params.student_id}, function() {
      this.getMediaList();
    });

   }

   render() {
      const { width } = Dimensions.get('window');      
      
      return (
        <View />
         /*<View >
            <Video
               source={{ uri: 'http://192.168.8.101:8081/media/watch' }}
               rate={1.0}
               volume={1.0}
               isMuted={false}
               resizeMode="cover"
               shouldPlay
               useNativeControls
               isLooping
               resizeMode="contain"
               style={{ width: "100%", height: "50%" }}
               />

        </View>*/
        
    );
  }
}

var styles = StyleSheet.create({
   backgroundVideo: {
     position: 'absolute',
     top: 0,
     left: 0,
     bottom: 0,
     right: 0,
   },
 });