import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, Dimensions } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { login } from "./Functions";

import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';

class Login extends React.Component {

  state={
    student_id:"",
    password:"",
    secure_password: true,
  }

  continue = e => {
    e.preventDefault(); 

    const {student_id, password } = this.state;

    let student = {
      student_id: student_id,
      password: password,
    };

    login(student).then(res => {
      console.log(res);
      if(res){
        SecureStore.setItemAsync('jwt',res.token);
        this.props.navigation.navigate('Home')
      }
      else{
        console.log("errr");
      }
    })
 }

 componentDidMount(){
   
  SecureStore.getItemAsync("jwt").then(jwt => {
    if(jwt){
      console.log("Already logged in");
      this.props.navigation.navigate('Home')
    }
  });


 }

  render(){

    const { student_id, secure_password } = this.state;

    return (
        <ScrollView contentContainerStyle = {styles.scroll}>
      <View style={styles.container}>
        <View style={styles.header}>
        <Image style = {styles.logo} source={require('./../images/logo.jpeg')} />
        </View>
        <View style={styles.footer}>

          <Text style={styles.footer_text}> Student ID </Text>
          <View style={styles.action}>
            <FontAwesome 
              name="user-o"
              color="#05375a"
              size={20}
            />
            <TextInput 
              placeholder="Your Student ID"
              style={styles.text_input}
              autoCapitalize= "none"
              onChangeText={text => this.setState({student_id:text})}
            />
            {(student_id.length > 0) ?
            <Animatable.View
              animation='bounceIn'
            >
              <Feather 
                name="check-circle"
                color="green"
                size = {20}
              /> 
            </Animatable.View>
            : null}
          </View>
          <Text style={[styles.footer_text, {
            marginTop: 35
          }]}> Password </Text>
          <View style={styles.action}>
            <Feather 
              name="lock"
              color="#05375a"
              size={20}
            />
            <TextInput 
              placeholder="Your Password"
              
              style={styles.text_input}
              secureTextEntry={secure_password}
              autoCapitalize= "none"
              onChangeText={text => this.setState({password:text})}
            />
            <TouchableOpacity onPress={() => this.setState({secure_password: !secure_password})}>
              {secure_password ?
              <Feather 
                name="eye-off"
                color="grey"
                size = {20}
              /> :
              <Feather 
                name="eye"
                color="grey"
                size = {20}
              /> }
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <Button
              style = {styles.button}
              onPress={this.continue}
              title="Sign In"
              color="#009387"
            />
          </View>
          <Image style = {styles.signature} source={require('./../images/signature.jpeg')} />
        </View>
      </View>
        </ScrollView>
    );
  }
}
export default Login;


const { height,width } = Dimensions.get('window');    

const styles = StyleSheet.create({
  scroll:{
    height: height,
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },  
  button: {
  },
  button_container: {
    marginTop: 40,
    marginBottom: 15,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
    maxWidth: 300,
  },
  footer_text: {
    color: '#05375a',
    fontSize: 18,
  },  
  header: {
    height: "30%",
    marginTop: Platform.OS === 'android' ? 25 : 0,
  }, 
  logo: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: 200,
    height: 170
  },
  container: {
    flex: 1,
    backgroundColor: '#009387',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  signature: {
    width: '100%',
    height: 100,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  text_input: {
    flex: 1,
    marginLeft: 15,
    paddingBottom: 2,
    color: '#05375a',
  }
});
