import React from 'react';
import { View, StyleSheet, Text, Dimensions, SafeAreaView } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { Table, Rows } from 'react-native-table-component';

import { ScrollView } from 'react-native-gesture-handler';

import { listTask } from "./Functions";



import Header from "./Header";

class Tasks extends React.Component {

    state = {
      jwt: '',
      orientation: 'portrait', 
      task_list : [],
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

  getTaskList = () => {

    const { jwt } = this.state; 
    console.log(jwt);

    listTask(jwt).then(res => {
      console.log("SUCCESS");
      console.log(res.task);

      let task_list = [];
      for(let i=0; i<res.task.length;++i){
         let item = {
            //uri: res.media[i].thumbnail,
            data: [
              ['MCQ', res.task[i].mcq ],
              ["Structured Essay", res.task[i].structured],
              ["Essay", res.task[i].essay],
              ["Other", res.task[i].other]
            ],
            due_date: res.task[i].due_date,
            tute: res.task[i].tute,
         }
         task_list.push(item);
      }
      this.setState({ task_list: task_list}, function() {
        console.log("task list updated");
      })
    });

 }


  componentDidMount()
  {
    this.getOrientation();
    
    Dimensions.addEventListener( 'change', () =>
    {
      this.getOrientation();
    });

    SecureStore.getItemAsync("jwt").then(jwt => {
      this.setState({ jwt });
      this.getTaskList();
    });


  }

  render() {
    const state = this.state;
    const { height,width } = Dimensions.get('window');  
    const { task_list } = this.state; 

    return (
      <SafeAreaView style = {styles.background}>
        <Header dark={true} onRef = {ref => (this.logOut = ref)} logOut = {this.logOut.bind(this)} />
        <View style = {styles.table_container}>
      <ScrollView>
      {task_list.map((item, i) => 
              {
                return (

                  <View style={styles.container} key={i}>
                      <Text style= {styles.text_date}> Due on:  {item.due_date}</Text>
                      <Text style= {styles.text_date}> Tute: {item.tute} </Text>
                    <Table borderStyle={{borderWidth: 2, borderColor: '#009387'}}>
                      <Rows data={item.data} widthArr = {[100, width - 138]} textStyle={styles.TableText}/>
                    </Table>
                  </View>

                );
              })}
      </ScrollView>
              </View>
      </SafeAreaView>
    )
  }
}
export default Tasks;

const { height,width } = Dimensions.get('window');   

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 25 : 0,

  },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    container: { 
        marginTop: 10,
        flex: 1,
        padding: 18,
      },
      table_container: {
        marginTop: 50,
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


