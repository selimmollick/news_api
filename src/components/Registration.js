import React, { Component } from 'react'
import {Navbar,Form,Button,Container} from 'react-bootstrap'
import { BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";
export default class Registration extends Component {
    render() {
        return (
            <div>
                <Navbar>
              <Container>
                <Navbar.Brand href="#home">Mi Blog</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    <NavLink as={Link} to={"/login"}><Button className="btn btn-primary">Login</Button></NavLink>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <section>
            <Container>
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4 signup-form">
                    <h3>Sign Up</h3>
                    <>
                    <Form.Control className="text-field" size="sm" type="text" placeholder="Email Address" />
                    <Form.Control className="text-field" size="sm" type="text" placeholder="Password" />
                    <Form.Control className="text-field" size="sm" type="text" placeholder="Password" />
                    <Form.Control className="text-field" size="sm" type="text" placeholder="Password" />
                    <NavLink as={Link} to={"/timeline"}><Button className="btn btn-primary" id="btnn">LOGIN</Button></NavLink>
                    </>
               
                    <p>If you have already sign in! <NavLink as={Link} to={"/login"}><strong>Sign In</strong></NavLink></p>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </Container>
            </section>
            </div>
        
        )
    }
}
