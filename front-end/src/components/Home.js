import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { listMedia } from "./Functions";

import { Image, ScrollView, Text } from 'react-native';

export default class Home extends React.Component {

    state = {
        student_id: '',
        mute: false,
        shouldPlay: true,
        media_list : [],
    }

    constructor() {
      super();
  
      this.playVideo = this.playVideo.bind(this);
    }

    getMediaList = () => {

      let {student_id} = this.state;

      listMedia(student_id).then(res => {

        console.log(res.media);

        let media_list = [];
        for(let i=0; i<res.media.length;++i){
           let item = {
              //uri: res.media[i].thumbnail,
              title: res.media[i].name,
              video_uri: res.media[i].video,
              uri: 'http://localhost:8081/media/thumbnail/'+res.media[i].thumbnail,
              width: 64,
              height: 64
           }
           media_list.push(item);
        }
        this.setState({ media_list: media_list}, function() {
          console.log("media list updated");
        });
      });

   }

   componentDidMount(){

    this.setState({ student_id: this.props.navigation.state.params.student_id}, function() {
      this.getMediaList();
    });
   }

   playVideo(id){
    console.log(id);
  }

   render() {
      const { width } = Dimensions.get('window');     
      const { media_list } = this.state; 
      
      return (
          <ScrollView contentContainerStyle={styles.scrollView}>

            {media_list.map((item, i) => 
            {
              return (
                <TouchableOpacity style = {styles.container} onPress={() => this.playVideo(item.video_uri)} key={i} >
                  <Image style = {styles.thumbnail} source={item} />
                  <Text style = {styles.text} > {item.title} </Text> 
                </TouchableOpacity>
              );
            })}
            </ScrollView>
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

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '50%',
    justifyContent: 'center',
    marginTop: 20,
    width: '70%',
  },
  scrollView: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    marginTop: 50,
   //position: "absolute"
  },
  text: {
    marginTop: 5,
  },
  thumbnail: {
    marginTop: 70,
    width: '70%',
    height: '70%',
  },
 });