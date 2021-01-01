import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather';

class Home extends React.Component {

  state = {
    student_id: ''
  }

  continue(screen){
    const {student_id } = this.state;

    if(screen == "lessons"){
      this.props.navigation.navigate('Media',{ student_id },)
    }
  }

  componentDidMount(){

    this.setState({ student_id: this.props.navigation.state.params.student_id}, function() {
      console.log("Student ID updated")
    });
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

            </View>
          </View>
        
    );
  }
}
export default Home;

const styles = StyleSheet.create({

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
    flexDirection: 'row',
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

