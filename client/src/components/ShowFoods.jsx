import React from 'react'
import {Link} from 'react-router-dom'

export default function ShowFoods(props) {
  return (
    <div>
      <h3>Foods</h3>
      {props.foods.map((foodItem)=>(
      <Link>{foodItem.name}</Link>
      ))}
      <Link to='/foods/new'><button>Create</button></Link>
    </div>
  )
}
