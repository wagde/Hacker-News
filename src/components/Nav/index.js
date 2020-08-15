// import {Link } from 'react-router';
import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
export default class NavbarComp extends React.Component {
    render() {
      return ( <>
<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="#home">Hacker News</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link >New</Nav.Link>
      <Nav.Link >Past</Nav.Link>
      <Nav.Link >Comments</Nav.Link>
      <Nav.Link >Ask</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </>)
    }
  }