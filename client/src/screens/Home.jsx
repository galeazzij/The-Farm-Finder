import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Col, Row, Card, Button, CardDeck } from "react-bootstrap";
import { verifyUser } from "../services/auth";

export default function Home(props) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    handleVerify();
  }, []);

  const handleVerify = async () => {
    const userData = await verifyUser;
    setCurrentUser(userData);
  };

  return (
    <Container>
      {props.currentUser ? (
        <>
          <CardDeck>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Foods</Card.Title>
                <Card.Text>
                  See the foods you've created and the farms where you can find
                  them!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button href="/foods" variant="primary">
                  Click Here
                </Button>
              </Card.Footer>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Farms</Card.Title>
                <Card.Text>
                  See the farms that sell the foods you want!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button href="/farms" variant="primary">
                  Click Here
                </Button>
              </Card.Footer>
            </Card>
          </CardDeck>
        </>
      ) : (
        <Link to="/login">Login/Register</Link>
      )}
    </Container>
  );
}
