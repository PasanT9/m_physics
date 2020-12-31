import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default class Home extends React.Component {

  state = {
    student_id: ''
  }

  continue(screen){
    const {student_id } = this.state;

    if(screen == "lessons"){
      this.props.navigation.navigate('Media',{ student_id },)
    }
  }



   render() {
      

      return (
          <View style = {styles.view}>
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
                <Text style = {styles.text}> Lessons</Text>
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
                  <Text style = {styles.text}> Notes </Text>
              </Animatable.View>
            </TouchableOpacity>

            </View>
          </View>
        
    );
  }
}

var styles = StyleSheet.create({

  view: {
    backgroundColor: '#009387',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    borderRadius: 20,
    height: '30%',
    width: '70%',
    maxWidth: 250,
    minWidth: 200,
    maxHeight: 170,
    minHeight: 120,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tab: {
    margin: 15,
    marginBottom: 5,
    marginTop: 5,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  }
 });