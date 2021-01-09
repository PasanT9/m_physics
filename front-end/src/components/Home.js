import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Platform,Image  } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather';

import Header from "./Header";

class Home extends React.Component {


  continue(screen){
    if(screen == "lessons"){
      this.props.navigation.navigate('Media')
    }
  }

  logOut() {
    SecureStore.deleteItemAsync('jwt');
    this.props.navigation.navigate('Login');
  }

   render() {
      

      return (
          <SafeAreaView style = {styles.view}>
            <Header dark={false} onRef = {ref => (this.logOut = ref)} logOut = {this.logOut.bind(this)} />
            <View style = {styles.outerContainer}>
            <View style = {styles.container}>
              <TouchableOpacity onPress={() => this.continue('lessons')}>
            <Animatable.View
                animation='bounceIn'
              >
              <View style = {{flexDirection: 'row'}}>
                <Feather 
                  name="video"
                  color="#05375a"
                  size = {65}
                  style = {styles.tab}
                /> 
                <Text style = {styles.footer_text}> Lessons</Text>
            </View>
            </Animatable.View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.continue('notes')}>
              <Animatable.View
                  animation='bounceIn'
                >
                  <View style = {{flexDirection: 'row'}}>
                  <Feather 
                    name="file-text"
                    color="#05375a"
                    size = {65}
                    style = {styles.tab}
                  /> 
                  <Text style = {styles.footer_text}> Notes </Text>
                  </View>
              </Animatable.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.continue('user')}>
              <Animatable.View
                  animation='bounceIn'
                >
                  <View style = {{flexDirection: 'row'}}>
                  <Feather 
                    name="user"
                    color="#05375a"
                    size = {65}
                    style = {styles.tab}
                  /> 
                  <Text style = {styles.footer_text}> Profile </Text>
                  </View>
              </Animatable.View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.continue('message')}>
              <Animatable.View
                  animation='bounceIn'
                >
                  <View style = {{flexDirection: 'row'}}>
                  <Feather 
                    name="message-square"
                    color="#05375a"
                    size = {65}
                    style = {styles.tab}
                  /> 
                  <Text style = {styles.footer_text}> Messages </Text>
                  </View>
              </Animatable.View>
            </TouchableOpacity>

            </View>
            </View>
            <Image style = {styles.signature} source={require('./../images/signature-dark.jpeg')} />
          </SafeAreaView>
        
    );
  }
}
export default Home;

const { height,width } = Dimensions.get('window');    

const styles = StyleSheet.create({

  view: {
    backgroundColor: '#009387',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 25 : 0
  },
  outerContainer: {
    borderRadius: 20,
    maxWidth: 250,
    minWidth: 250,
    maxHeight: height*0.50,
    minHeight: height*0.50,
    backgroundColor: "#fff",
    marginTop: "25%",
  },
  container: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  tab: {
    margin: 15,
    marginBottom: 5,
    marginTop: 8,
    marginLeft: 20,
  },
  footer_text: {
    color:"#05375a",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  signature: {
    marginTop: 'auto',
    marginBottom: 'auto',
    height: height*0.25,
    width: width*0.7,
  }
 });

