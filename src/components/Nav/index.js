// import {Link } from 'react-router';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
export default class NavbarComp extends React.Component {
  render() {
    return (<>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">Hacker News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="newstories" className="nav-link">New Stories</Link>
            <Link to="topstories" className="nav-link">Top Stories</Link>
            <Link to="beststories" className="nav-link">Best Stories</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>)
  }
}