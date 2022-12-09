import React, { Component } from 'react'
import {Navbar,Form,Button,Container} from 'react-bootstrap'
import { BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";
import './style.css'
export default class Login extends Component {
    render() {
        return (
            <div>
            <Navbar>
              <Container>
                <Navbar.Brand href="#home">Mi Blog</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    <NavLink as={Link} to={"/registration"}><Button className="btn btn-primary">Registration</Button></NavLink>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <section className="sec">

              <Container>
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8 login-form">
                    <h1>LOGIN</h1>
                    <>
                    <Form.Control className="text-field" size="sm" type="text" placeholder="Email Address" />
                    <Form.Control className="text-field" size="sm" type="text" placeholder="Password" />
                    <>
                     <Form.Check type="checkbox" aria-label="radio 1"  label="Remember me" className="lbl"/>
                    </>
                    <NavLink as={Link} to={"/timeline"}><Button className="btn btn-primary" id="btnn">LOGIN</Button></NavLink>
                    </>
               
                    <p>If you have no sign up yet! <NavLink as={Link} to={"/registration"}><strong>Sign Up</strong></NavLink></p>
                    <p><small>Note: Daque ipsa quae ab illo inventore veritatis et quasi architecto</small></p>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </Container>
            </section>
            </div>
        )
    }
}
{/*<NavLink as={Link} to={"/timeline"}><Button className="btn btn-primary">TimeLine</Button></NavLink> */}
