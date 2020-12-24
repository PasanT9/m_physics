import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Image } from 'react-native';

export default class Home extends React.Component {

  state = {
    student_id: '',
    icon_list : ["media.png", "notification.png", "papers.jpeg", "profile.png"],
  }

  continue(icon){

    const {student_id, icon_list} = this.state;
    if(icon == icon_list[0])
    {
      this.props.navigation.navigate('Media',{ student_id },)
    }
  }

  componentDidMount(){

    this.setState({ student_id: this.props.navigation.state.params.student_id}, function() {
      console.log("student id updated");
    });
   }

   render() {
      
    const { icon_list } = this.state; 

      return (
          <View style = {styles.view}>

            {icon_list.map((item, i) => 
            {
              return (
                <TouchableOpacity onPress={() => this.continue(item)}style = {styles.thumbnail} key={i} >
                  <Image style = {styles.thumbnail} source={require('../images/'+item)} />
                </TouchableOpacity>
              );
            })}
          
          </View>
        
    );
  }
}

var styles = StyleSheet.create({

  view: {
    //alignContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    justifyContent: 'center'
   //position: "absolute"
  },
  thumbnail: {
    margin: 10,
    width: 120,
    height: 120,
  },
 });