import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {Navbar} from 'react-bootstrap';

class Navigationbar extends Component {
   logOut(e) {
      e.preventDefault()
      localStorage.removeItem('usertoken')
      this.props.history.push(`/login`)
   }

   render() {



      return (
<Navbar collapseOnSelect expand="lg" variant="dark" style = {{backgroundColor: "#009387"}}>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  </Navbar.Collapse>
</Navbar>
      )
   }
}

export default withRouter(Navigationbar)
