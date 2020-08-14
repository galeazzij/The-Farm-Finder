import React from 'react'
import {Link} from 'react-router-dom'

export default function ShowFarms(props) {
  return (
    <div>
      <h3>Farms</h3>
      {props.farms.map((farm) => (
        <Link to={`/farms/${farm.id}`}><p>{farm.name}</p></Link>
      ))}
    </div>
  )
}

