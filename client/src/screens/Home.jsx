import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { verifyUser } from "../services/auth";

export default function Home(props) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    handleVerify()
  }, [])

  const handleVerify = async () => {
    const userData = await verifyUser;
    setCurrentUser(userData);
  } 

  return (
    <Container>
         {
        props.currentUser ? (
          <>
            <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Go To Foods</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
       

        <Col>
           <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Go To Farms</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
      </Row>
          </>
        ) : (
            <Link to='/login'>Login/Register</Link>
        )

        }

      
    </Container>
  );
}
