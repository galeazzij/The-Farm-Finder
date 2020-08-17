import React from 'react'
import { Container, Card, Button, CardDeck } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default function ShowFarms(props) {
  return (
    <Container>
      <h3>Farms</h3>
      <CardDeck>
        {props.farms.map((farm) => (
          <>
            <Card>
              <Card.Body>
                <Card.Title><Link to={`/farms/${farm.id}`}><p>{farm.name}</p></Link></Card.Title>
                <Card.Subtitle>Foods available here:</Card.Subtitle>
            </Card.Body>
            </Card>
            
          </>
        
      ))}
      </CardDeck>
     
    </Container>
  )
}

