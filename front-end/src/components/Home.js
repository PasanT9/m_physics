import React from 'react';
import { StyleSheet, Dimensions, SafeAreaView } from 'react-native';
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

    getMediaList = () => {

      let {student_id} = this.state;

      listMedia(student_id).then(res => {

        console.log(res.media);

        let media_list = [];
        for(let i=0; i<res.media.length;++i){
           let item = {
              //uri: res.media[i].thumbnail,
              name: res.media[i].name,
              uri: 'https://reactnative.dev/img/tiny_logo.png',
              width: 64,
              height: 64
           }
           media_list.push(item);
        }
        this.setState({ media_list: media_list}, function() {
          console.log("url: " + this.state.media_list[0].uri);
        });
      });

   }

   componentDidMount(){

    this.setState({ student_id: this.props.navigation.state.params.student_id}, function() {
      this.getMediaList();
    });
   }

   render() {
      const { width } = Dimensions.get('window');     
      const { media_list } = this.state; 
      
      return (
          <ScrollView contentContainerStyle={styles.scrollView}>

            {media_list.map(function(item, i)
            {
              return ([
                <Image source={item} style = {styles.thumbnail} key={i} />,
                <Text style = {styles.text} > {item.name} </Text>
              ]);
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
    height: '50%',
  },
 });