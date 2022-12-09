import React, { Component } from 'react'
import {Navbar,Nav,Button,Container,NavDropdown,FormControl} from 'react-bootstrap'
import { BrowserRouter,Link,NavLink} from "react-router-dom";
export default class Timeline extends Component {
    render() {
        return (
          <div>
          <Navbar>
            <Container>
              <Navbar.Brand href="#home">Mi Blog</Navbar.Brand>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">blog</Nav.Link>
              <NavDropdown title="My Profile" id="navbarScrollingDropdown">
                <NavDropdown.Item >Setting</NavDropdown.Item>
                <NavDropdown.Item >Change Password</NavDropdown.Item>
                <NavDropdown.Item >Logout</NavDropdown.Item>
              </NavDropdown>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <section>
            <Container>
              <div className="row">
                <div className="col-md-7">
                  <div className="col-md-3">
                    <img src="./components/image/ami.jpg" width="100px" />
                  </div>
                  <div className="col-md-9"></div>
                </div>
                <div className="col-md-5"><h4>Recent List :</h4></div>
              </div>
            </Container>
          </section>
          </div>
        )
    }
}
