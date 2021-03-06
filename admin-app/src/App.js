import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login'
import Navbar from './components/Navigation'

class App extends Component {

   render() {
      return (
         <Router>
           <Navbar />
            <div className="App">
               <div className="container">
                  <Route exact path="/login" component={Login} />
               </div>
            </div>
         </Router>
      )
   }
}

export default App;
