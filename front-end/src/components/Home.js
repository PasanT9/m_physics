import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Platform  } from 'react-native';
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
                <Feather 
                  name="video"
                  color="#05375a"
                  size = {65}
                  style = {styles.tab}
                /> 
                <Text style = {styles.footer_text}> Lessons</Text>
            </Animatable.View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.continue('notes')}>
              <Animatable.View
                  animation='bounceIn'
                >
                  <Feather 
                    name="file-text"
                    color="#05375a"
                    size = {65}
                    style = {styles.tab}
                  /> 
                  <Text style = {styles.footer_text}> Notes </Text>
              </Animatable.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.continue('user')}>
              <Animatable.View
                  animation='bounceIn'
                >
                  <Feather 
                    name="user"
                    color="#05375a"
                    size = {65}
                    style = {styles.tab}
                  /> 
                  <Text style = {styles.footer_text}> Profile </Text>
              </Animatable.View>
            </TouchableOpacity>

            
            <TouchableOpacity onPress={() => this.continue('message')}>
              <Animatable.View
                  animation='bounceIn'
                >
                  <Feather 
                    name="message-square"
                    color="#05375a"
                    size = {65}
                    style = {styles.tab}
                  /> 
                  <Text style = {styles.footer_text}> Messages </Text>
              </Animatable.View>
            </TouchableOpacity>

            </View>
            </View>
          </SafeAreaView>
        
    );
  }
}
export default Home;

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
    maxHeight: 250,
    minHeight: 250,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  container: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tab: {
    margin: 15,
    marginBottom: 5,
    marginTop: 5,
  },
  footer_text: {
    color: "black",
    textAlign: 'center',
    fontWeight: 'bold',
  }
 });

