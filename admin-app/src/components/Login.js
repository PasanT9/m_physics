import React, { Component } from "react";
import { login } from './Functions';
import { Button, Form, Card } from 'react-bootstrap';

class Login extends Component {

   state = {
      student_id: '',
      password: '',
   }

   handleChange = input => e => {
      this.setState({
         [input]: e.target.value
      });
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
        console.log("login success");
      }
      else{
        console.log("errr");
      }
    })
 }

   render() {
      const values = this.state;

      return (
         <Card data-testid="login-form">
            <Form onSubmit = {e => this.continue(e)}>
               <Card.Body>
                  <Card.Title className='text-center'>
                     Sign In
                  </Card.Title>
                  <Form.Group >
                     <Form.Label>Student ID</Form.Label>
                     <Form.Control type="text"  value = {values.student_id} onChange = {this.handleChange('student_id')} placeholder="Enter student ID" required/>
                  </Form.Group>
                  <Form.Group >
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" value = {values.password} onChange = {this.handleChange('password')} placeholder="Enter password" required />
                  </Form.Group>
                  <br />
                  <Button style={{backgroundColor: "#009387", border: "none"}} type="submit" block>
                     Continue
                  </Button>
                  <Card.Text>
                     forgot&ensp;<a href="#">password?</a>
                  </Card.Text>
               </Card.Body>
            </Form>
         </Card>
      );
   }
}



export default Login;
