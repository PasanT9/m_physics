import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { login } from "./Functions";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

class Login extends React.Component {

  state={
    student_id:"",
    password:"",
  }

  continue = e => {
    e.preventDefault(); 

    const {student_id, password } = this.state;
    let student = {
      student_id: student_id,
      password: password,
    };

    login(student).then(res => {
      console.log("login success");
      this.props.navigation.navigate('Home',{ student_id },)
    })
 }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.header_text}>M Physics</Text>
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
            <Feather 
              name="check-circle"
              color="green"
              size = {20}
            />
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
              secureTextEntry={true}
              autoCapitalize= "none"
              onChangeText={text => this.setState({password:text})}
            />
            <Feather 
              name="eye-off"
              color="grey"
              size = {20}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={this.continue} >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },  
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  footer_text: {
    color: '#05375a',
    fontSize: 18,
  },  
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  header_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },  
  container: {
    flex: 1,
    backgroundColor: '#009387',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
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
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  text_input: {
    flex: 1,
    marginTop: -12,
    paddingBottom: 10,
    color: '#05375a',
  }
});
