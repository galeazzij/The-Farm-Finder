import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Button, CardDeck } from "react-bootstrap";
import { destroyFood } from '../services/foods'

export default function ShowFoods(props) {

  const handleClick = async (id) => {
    await destroyFood(id);
    props.setFoods(props.foods.filter((foodItem) => {
      return foodItem.id !== id
    }))

  }
  return (
    <Container>
      <h3>Foods</h3>
      <CardDeck>
      {props.foods.map((foodItem) => (
        <>
          <Card style={{ width: "18rem" }}>
              {/* <Card.Img variant="top" src='./holder.png' />  Saved for future img use */}
              <Card.Body>
              <Card.Title><Link to={`/foods/${foodItem.id}`}>{foodItem.name}</Link></Card.Title>
              {/* Maybe map through the Joins table to show the Foods where the ID's match */}
                <Card.Text>  
                  See the foods you've created and the farms where you can find
                  them
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button >
                  <Link to={`/foods/${foodItem.id}/edit`}><button>edit</button></Link>
                  <button onClick={()=> handleClick(foodItem.id)}>delete</button>
                </Button>
              </Card.Footer>
              <Card.Footer>
                <Button >
                  <Link to='/foods/new'><button>Create</button></Link>
                </Button>
              </Card.Footer>
            </Card>
          {/* href="/foods" variant="primary" */}
          
          
          {/* <br/> */}
        </>
      ))}
      </CardDeck>
    </Container>
  )
}
