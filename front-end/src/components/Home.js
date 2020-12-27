import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';


export default class Home extends React.Component {

  state = {
    student_id: ''
  }


  componentDidMount(){

    this.setState({ student_id: this.props.navigation.state.params.student_id}, function() {
      console.log("student id updated");
    });

   }

   render() {
      
      return (
          <View>
          
          </View>
        
    );
  }
}

var styles = StyleSheet.create({

 });