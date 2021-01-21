import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { ScrollView } from 'react-native-gesture-handler';


import Header from "./Header";

class Tasks extends React.Component {

    state = {
      orientation: 'portrait', 
        DataTable: [
          ['MCQ', '2'],
          ['Structured Essay', '2sssssssssssssssssssssssssssssss'],
          ['Essay', 'sssssssssssssssssssssssssssss2'],
          ['Other', 'b']]
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
    const state = this.state;
    const { height,width } = Dimensions.get('window');   

    return (
      <ScrollView contentContainerStyle = {styles.scroll}>
        <Header dark={true} onRef = {ref => (this.logOut = ref)} logOut = {this.logOut.bind(this)} />
      <View style={styles.container}>
          <Text style= {styles.text_date}> Due on xx/xx/xx </Text>
          <Text style= {styles.text_date}> Tute: xx </Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#009387'}}>
          <Rows data={state.DataTable} widthArr = {[100, width - 138]} textStyle={styles.TableText}/>
        </Table>
      </View>
      </ScrollView>
    )
  }
}
export default Tasks;

const { height,width } = Dimensions.get('window');   

const styles = StyleSheet.create({
  scroll:{
    height: height,
    marginTop: Platform.OS === 'android' ? 25 : 0
  },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    container: { 
        marginTop: 50,
        flex: 1,
        padding: 18,
        paddingTop: 35,
      },
      TableText: { 
        margin: 10,
        fontSize: 16,
      },
      text_date: {
          marginBottom: 12,
          fontSize: 16,
      }
   });


