import React, { useState, useEffect } from 'react'
import {Container, Card} from 'react-bootstrap'
import {readOneFarm} from '../services/farms'

export default function ShowOneFarm(props) {
  const [farm, setFarm] = useState(null);

  useEffect(() => {
    getOneFarm()
  }, [])

  const getOneFarm = async () => {
    const farmItem = await readOneFarm(props.match.params.id)
    setFarm(farmItem)
  }

  return (
    <div>
      {farm &&
        <>
        <Container className="align-items-center" style={{width: "20rem"}}  >
          <Card>
            <Card.Title><h3>{farm.name}</h3></Card.Title>
            <Card.Subtitle><p>{farm.address}</p></Card.Subtitle>
            <Card.Subtitle> <p>{farm.city}{', '}{farm.state}{' '}{farm.zipcode}</p></Card.Subtitle>
            <Card.Subtitle><p>{farm.phone}</p></Card.Subtitle>
          </Card>
        </Container>
        </>
      }
    </div>
  )
}
