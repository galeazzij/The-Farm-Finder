import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function NavBar(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Farm To Table Faster</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://nofa.org/">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {props.currentUser ? (
                <>
                  <NavDropdown.Item><Link to="/foods">Food</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/farms">Farms</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    About Us
                  </NavDropdown.Item>
                </>
              ) : (
                <Link to="/login">Login/Register</Link>
              )}
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
