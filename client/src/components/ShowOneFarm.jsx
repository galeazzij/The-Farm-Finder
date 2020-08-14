import React, { useState, useEffect } from 'react'
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
        <p>{farm.name}</p>
        <p>{farm.address}</p>
        <p>{farm.city}{', '}{farm.state}{' '}{farm.zipcode}</p>
        <p>{farm.phone}</p>
        </>

        
      }
    </div>
  )
}
