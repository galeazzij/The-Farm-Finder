import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loginUser } from "../services/auth";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await loginUser(formData);
    console.log(formData)
    console.log(userData)
    
   props.setCurrentUser(userData);
   props.history.push("/");
    console.log(props.currentUser)
  };

  return (
    <>
      <Container className="align-items-center" style={{ width: "20rem" }}>
        <Form>
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

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Form.Group>
            <Form.Label>Don't Have an Account Yet?</Form.Label>
            <Form.Text>
              <Link to="/register">Register Here</Link>
            </Form.Text>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
