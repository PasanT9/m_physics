import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


import Header from "./Header";

class Tasks extends React.Component {

    state = {
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

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
          <Text style= {styles.text_date}> Due on xx/xx/xx </Text>
          <Text style= {styles.text_date}> Tute: xx </Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#009387'}}>
          <Rows data={state.DataTable}  textStyle={styles.TableText}/>
        </Table>
      </View>
    )
  }
}
export default Tasks;

const styles = StyleSheet.create({
    view: {
      backgroundColor: '#009387',
      flex: 1,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Platform.OS === 'android' ? 25 : 0
    },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    container: { 
        marginTop: 20,
        flex: 1,
        padding: 18,
        paddingTop: 35,
      },
      TableText: { 
        margin: 10,
        fontSize: 19,
      },
      text_date: {
          marginBottom: 20,
          fontSize: 19,
      }
   });


