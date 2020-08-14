import React from 'react'

export default function ShowFarms(props) {
  return (
    <div>
      <h3>Farms</h3>
      {props.farms.map((farm) => (
        <p>{farm.name}</p>
      ))}
    </div>
  )
}

