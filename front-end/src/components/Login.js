import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { login } from "./Functions";

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
      console.log("SUCCESS");
       if (res.status == 200) {
          console.log("login success");
          this.props.navigation.navigate('Home')
       }
       else {
          console.log('login failed');
       }
    })
 }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>M_PHYSICS</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Student ID..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({student_id:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
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
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
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
  }
});
