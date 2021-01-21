import React from 'react';
import { Dimensions, StyleSheet, Image, ScrollView, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { listMedia } from "./Functions";

import Header from './Header';


export default class Home extends React.Component {

    state = {
      jwt: '',
      mute: false,
      shouldPlay: true,
      media_list : [],
    }

    constructor() {
      super();
  
      this.playVideo = this.playVideo.bind(this);
    }

    getMediaList = () => {

      const { jwt } = this.state; 
      console.log(jwt);

      listMedia(jwt).then(res => {
        console.log("SUCCESS");
        console.log(res.media);

        let media_list = [];
        for(let i=0; i<res.media.length;++i){
           let item = {
              //uri: res.media[i].thumbnail,
              title: res.media[i].title,
              video_id: res.media[i].media_object,
              uri: 'http://192.168.1.101:8081/media/thumbnail/'+res.media[i].thumbnail_object,
              width: 64,
              height: 64
           }
           media_list.push(item);
        }
        this.setState({ media_list: media_list}, function() {
          console.log("media list updated");
        })
      });

   }

   logOut() {
    SecureStore.deleteItemAsync('jwt');
    this.props.navigation.navigate('Login');
  } 

   componentDidMount(){

    SecureStore.getItemAsync("jwt").then(jwt => {
      this.setState({ jwt });
      this.getMediaList();
    });

   }

   playVideo(video_id){
    this.props.navigation.navigate('MediaPlayer',{ video_id },)
  }

   render() {  
      const { media_list } = this.state; 
      
      
      return (
        
        <SafeAreaView style = {styles.background}>
          <Header dark={true} onRef = {ref => (this.logOut = ref)} logOut = {this.logOut.bind(this)} />
          <View style = {styles.container}>
          
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>

              {media_list.map((item, i) => 
              {
                return (
                  
                  <TouchableOpacity style = {styles.thumbnailContainer} onPress={() => this.playVideo(item.video_id)} key={i} >
                    <Image style = {styles.thumbnail} source={item} />
                    <Text style = {styles.text} > {item.title} </Text> 
                  </TouchableOpacity>
                );
              })}
              </ScrollView>
            </View>
        </SafeAreaView>
        
    );
  }
}

const { width } = Dimensions.get('window');    

const styles = StyleSheet.create({

  background: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    marginTop: 50,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },  

  scrollView: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: "100%"
   //position: "absolute"
  },
  text: {
    marginTop: 10,
    marginBottom: 20,
  },
  thumbnail: {
    marginTop: 20,
    maxWidth: 400,
    width: width - 10,
    height: 200,
  },
  thumbnailContainer: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#009387',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    width: "100%"
  },
 });