import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Platform,Image, Orientation  } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather';

import * as ScreenOrientation from 'expo-screen-orientation';


import Header from "./Header";



class Home extends React.Component {

  state = {
    orientation: 'portrait', 
  }


  continue(screen){
    if(screen == "lessons"){
      this.props.navigation.navigate('Media')
    }
    if(screen == "tasks"){
      this.props.navigation.navigate('Tasks')
    }
  }

  logOut() {
    SecureStore.deleteItemAsync('jwt');
    this.props.navigation.navigate('Login');
  }

  getOrientation = () =>
  {
    console.log("change");
    const { height,width } = Dimensions.get('window');    

    if(height > width){
      this.setState({ orientation: 'portrait' });
    }
    else{
      this.setState({ orientation: 'landscape' });
    }

  }

  componentDidMount()
  {
    this.getOrientation();
    
    Dimensions.addEventListener( 'change', () =>
    {
      this.getOrientation();
    });
  }


   render() {
     const {orientation} = this.state;

      const styles = (orientation == "portrait")? styles_portrait : styles_landscape;

      return (
          <SafeAreaView style = {styles.view}>
            <Header dark={false} onRef = {ref => (this.logOut = ref)} logOut = {this.logOut.bind(this)} />
            <View style = {styles.outerContainer}>
            <View style = {styles.container}>
              <TouchableOpacity onPress={() => this.continue('lessons')}>
            <Animatable.View
                animation='bounceIn'
              >
              <View style = {styles.icon}>
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

            <TouchableOpacity onPress={() => this.continue('tasks')}>
              <Animatable.View
                  animation='bounceIn'
                >
                  <View style = {styles.icon}>
                  <Feather 
                    name="check-square"
                    color="#05375a"
                    size = {65}
                    style = {styles.tab}
                  /> 
                  <Text style = {styles.footer_text}> Tasks </Text>
                  </View>
              </Animatable.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.continue('user')}>
              <Animatable.View
                  animation='bounceIn'
                >
                  <View style ={styles.icon}>
                  <Feather 
                    name="file-text"
                    color="#05375a"
                    size = {65}
                    style = {styles.tab}
                  /> 
                  <Text style = {styles.footer_text}> Marks </Text>
                  </View>
              </Animatable.View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.continue('message')}>
              <Animatable.View
                  animation='bounceIn'
                >
                  <View style = {styles.icon}>
                  <Feather 
                    name="calendar"
                    color="#05375a"
                    size = {65}
                    style = {styles.tab}
                  /> 
                  <Text style = {styles.footer_text}> Calender </Text>
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


const styles_portrait = StyleSheet.create({
  icon: {
    flexDirection: "row",
  },
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
    maxHeight: "55%",
    minHeight: "55%",
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
    height: "25%",
    width: "70%",
  }
 });

 const styles_landscape = StyleSheet.create({
  icon: {
    flexDirection: "column",
    width: 100,
  },
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
    height: "40%",
    width: "70%",
    backgroundColor: "#fff",
    marginTop: "13%",
  },
  container: {
    justifyContent: 'space-evenly',
    alignContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    flexDirection: 'row',
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
    height: "30%",
    width: "25%",
  }
 });


