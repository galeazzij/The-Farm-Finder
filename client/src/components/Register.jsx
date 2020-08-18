import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { registerUser } from '../services/auth';
import {Container, Form, Button} from 'react-bootstrap'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit= async (e) => {
    e.preventDefault();
    const userData = await registerUser(formData);
    props.setCurrentUser(userData)
    props.history.push('/')
  }

  return (
    <>
      <Container className="align-items-center" style={{ width: "20rem" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Form.Group>
            <Form.Label>Already Have An Account?</Form.Label>
            <Form.Text>
              <Link to="/login">Login Here</Link>
            </Form.Text>
          </Form.Group>
        </Form>
      </Container>
    </>
    
  );
}