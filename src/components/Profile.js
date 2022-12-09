import React, { Component } from 'react'
import {Navbar,Button,Container} from 'react-bootstrap'
export default class Profile extends Component {
    render() {
        return (
            <div>
            <Navbar>
  <Container>
    <Navbar.Brand href="#home">Mi Blog</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <Button className="btn btn-primary">Registration</Button>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
<h1>Profile</h1>
            </div>
        )
    }
}
